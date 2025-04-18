import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly loginElements = {
    usernameTextbox: `input[name="username"]`,
    passwordTextbox: `input[name="password"]`,
    loginButton: `button[type="submit"]`,
    usernameAlert: `(//input[@name="username"]/following::span)[1]`,
    passwordAlert: `(//input[@name="password"]/following::span)[1]`,
    incorrectCredentialAlert: `[role="alert"] p`,
    forgotPasswordLink: `[class="orangehrm-login-forgot"] p`,
    orangeHrmLink: `a[href="http://www.orangehrm.com"]`,
  }

  /* ============ Methods =============== */

  async login(email: string, password: string) {
    await this.waitAndFill(this.loginElements.usernameTextbox, email);
    await this.waitAndFill(this.loginElements.passwordTextbox, password);
    await this.waitAndClick(this.loginElements.loginButton);
  }

  /*==================Verification==============*/

  async verifyUsernameAlert(message: string) {
    await this.verifyTextContent(this.loginElements.usernameAlert, message);
  }

  async verifyPasswordAlert(message: string) {
    await this.verifyTextContent(this.loginElements.passwordAlert, message);
  }

  async verifyIncorrectCredentialAlert(message = 'Invalid credentials') {
    await this.verifyTextContent(this.loginElements.incorrectCredentialAlert, message);
  }

  async verifyLoginPageShow() {
    await this.verifyElementVisible(this.loginElements.usernameTextbox);
    await this.verifyElementVisible(this.loginElements.passwordTextbox);
    await this.verifyElementVisible(this.loginElements.loginButton);
    await this.verifyElementVisible(this.loginElements.forgotPasswordLink);
    await this.verifyElementVisible(this.loginElements.orangeHrmLink);
  }
}