import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly sidePanelElements = {
    searchTextbox: `input[placeholder="Search"]`,
    module: (name: string) => `//*[@class="oxd-main-menu-item"]//*[text()='${name}']`,
  }

  /* ============ Methods =============== */
  async searchFeatureFromSideBar(feature: string) {
    await this.waitAndFill(this.sidePanelElements.searchTextbox, feature);
  }

  /*==================Verification==============*/
  async verifySidePanelSearchTextShow() {
    await this.verifyElementVisible(this.sidePanelElements.searchTextbox);
  }

  async verifySidePanelListFeaturesShow(listFeatures: string[], isShow = true) {
    for (const feature of listFeatures) {
      await this.verifySidePanelFeatureShow(feature, isShow);
    };
  }

  async verifySidePanelFeatureShow(feature: string, isShow = true) {
    if (isShow) {
      await this.verifyElementVisible(this.sidePanelElements.module(feature));
    } else {
      await this.verifyElementNotVisible(this.sidePanelElements.module(feature));
    }
  }
}