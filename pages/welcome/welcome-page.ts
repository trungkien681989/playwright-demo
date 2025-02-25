import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class WelcomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly welcomeElements = {
    getStartedButton: `button>>text=Get Started`,
  }

  /* ============ Methods =============== */


  /*==================Verification==============*/
  async verifyGetStartedButtonShow() {
    await this.verifyElementVisible(this.welcomeElements.getStartedButton);
  }
}