import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly loginElements = {
    emailTextbox: `input[name="email"]`,
    passwordTextbox: `input[name="password"]`,
    signInButton: `(//*[@id="remember-me"]/following::button)[1]`,
  }

  /* ============ Methods =============== */

  async login(email: string, password: string) {
    await this.waitAndFill(this.loginElements.emailTextbox, email);
    await this.waitAndFill(this.loginElements.passwordTextbox, password);
    await this.waitAndClick(this.loginElements.signInButton);
  }

  /*==================Verification==============*/

  async verifyLoginPageShow() {
    await this.verifyElementVisible(this.loginElements.emailTextbox);
    await this.verifyElementVisible(this.loginElements.passwordTextbox);
    await this.verifyElementVisible(this.loginElements.signInButton);
  }
}