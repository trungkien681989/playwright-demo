import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly loginElements = {
    emailTextbox: `input[name="email"]`,
    emailAlert: `(//input[@name="email"]/following::*[@role="alert"])`,
    passwordTextbox: `input[name="password"]`,
    passwordAlert: `(//input[@name="password"]/following::*[@role="alert"])`,
    signInButton: `(//*[@id="remember-me"]/following::button)[1]`,
  }

  /* ============ Methods =============== */

  async login(email: string, password: string) {
    await this.waitAndFill(this.loginElements.emailTextbox, email);
    await this.waitAndFill(this.loginElements.passwordTextbox, password);
    await this.waitAndClick(this.loginElements.signInButton);
  }

  /*==================Verification==============*/

  async verifyEmailAlert(message: string) {
    await this.verifyTextContent(this.loginElements.emailAlert, message);
  }

  async verifyPasswordAlert(message: string) {
    await this.verifyTextContent(this.loginElements.passwordAlert, message);
  }

  async verifyLoginPageShow() {
    await this.verifyElementVisible(this.loginElements.emailTextbox);
    await this.verifyElementVisible(this.loginElements.passwordTextbox);
    await this.verifyElementVisible(this.loginElements.signInButton);
  }
}