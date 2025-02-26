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

  async signUpMock(fullName: string, email: string, password: string, mockResponseStatusCode: number, mockResponseBody: any) {
    // Mock the API endpoint
    await this.page.route('**/register/basic', (route) => {
      // Mock the response
      route.fulfill({
        status: mockResponseStatusCode,  // HTTP status code
        contentType: 'application/json',  // Content type
        body: JSON.stringify({ mockResponseBody })
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