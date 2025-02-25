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
    signInButton: `button>>text=Sign in`,
  }

  /* ============ Methods =============== */

  async login(email: string, password: string) {
    await this.waitAndFill(this.loginElements.emailTextbox, email);
    await this.waitAndFill(this.loginElements.passwordTextbox, password);
    await this.waitAndClick(this.loginElements.signInButton);
    await Promise.all([
      this.waitForResponseSuccess("/login/basic"),
    ]);
  }

  /*==================Verification==============*/
}