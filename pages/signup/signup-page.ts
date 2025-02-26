import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class SignUpPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly signUpWelcomeElements = {
    createAccountButton: `[class="login-selection__footer"] button >> nth=0`,
    signInButton: `[class="login-selection__footer"] button >> nth=1`,
  }

  readonly signUpElements = {
    fullNameTextbox: `input[name="fullName"]`,
    emailTextbox: `input[name="email"]`,
    passwordTextbox: `input[name="password"]`,
    createAccountButton: `//*[@name="password"]/following::button`,
  }

  /* ============ Methods =============== */

  async signUpReal(fullName: string, email: string, password: string) {
    await this.signUp(fullName, email, password);
    await Promise.all([
      this.waitForResponseSuccess('/register/basic'),
    ]);
  }

  async signUpMock(fullName: string, email: string, password: string) {
    // Mock the API endpoint
    await this.page.route('**/register/basic', (route) => {
      // Mock the response
      route.fulfill({
        status: 200,  // HTTP status code
        contentType: 'application/json',  // Content type
        body: JSON.stringify({
          id: '67bd9c412e805dc73034cc16',
          email: 'trungkien681989@gmail.com',
          created_at: 1740479553,
          created_at_utc: '2025-02-25 10:32:33',
          updated_at: null,
          updated_at_utc: null,
          user_id: 'ltIn2MS3QZ-y_TaYQ5-m7TvZMwsyLqXL',
          external_id: 'FgcNCFEvP1c8PEcKNDgMNiZ4Yzl9AFk4HCVEKB0mL3g=',
          from_existing_elsa_user: false,
          first_login: true,
          fullname: 'Kien Bui',
          access_token: 'F3S0w0bysBQFdbjtxpFurijM/IAXdR5/rim8XayXw8eiJNKSE6c1b76xZEMhOTpTdm9vn+/ohkXajnE2FEO5/xlDKKbeoFRFKELRcRpm6j06aEyW5pdqUrKMohbfdWkQX4ypVKDvF+fJVinpiZ0D1mY1yKVeY/bzECpOgjzjeNUCJVdst0b6/XKFSWP8yleRgNaNT+KFgANfU2qDCiDgQw==',
          refresh_token: '98235655',
          account_type: 'basic',
          google_calendar_key: null,
          outlook_calendar_key: null,
          self_described: null,
          main_focus: null,
          first_language_code: null,
          first_language_name: null,
          onboarding_first_lesson_completed: false,
          onboarding_user_completed: false,
          organization: []
        })
      });
    });
    await this.signUp(fullName, email, password);
  }

  async signUp(fullName: string, email: string, password: string) {
    await this.waitAndClick(this.signUpWelcomeElements.createAccountButton);
    await this.waitAndFill(this.signUpElements.fullNameTextbox, fullName);
    await this.waitAndFill(this.signUpElements.emailTextbox, email);
    await this.waitAndFill(this.signUpElements.passwordTextbox, password);
    await this.waitAndClick(this.signUpElements.createAccountButton);
  }

  /*==================Verification==============*/
}