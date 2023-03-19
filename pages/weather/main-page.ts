import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly headerElements = {
    tab: (name: string) => `#regionHeader [id*="LocalsuiteNav-header"] a span >> text=${name}`,
    savedLocation: (name: string) => `#regionHeader [id*="SavedLocations-header"] a span >> text=${name}`,
  }

  /* ============ Methods =============== */

  async goToTab(name: string) {
    await this.waitAndClick(this.headerElements.tab(name));
    await Promise.all([
      this.waitForResponseSuccess("CreativeDisplayer"),
    ]);
  }

  /*==================Verification==============*/

  async verifySavedLocation(location: string) {
    await this.verifyElementVisible(this.headerElements.savedLocation(location));
  }
}