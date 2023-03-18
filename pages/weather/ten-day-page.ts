import { Page } from '@playwright/test';
import { MainPage } from '../weather/main-page';

export class TenDayPage extends MainPage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly dailyForecastElements = {
    dateRowExpanded: (index: string) => `[data-testid="ExpandedDetailsCard"][id="detailIndex${index}"][data-track-string="false"]`,
    dateRowCollapsed: (index: string) => `[data-testid="ExpandedDetailsCard"][id="detailIndex${index}"][data-track-string="detailsExpand"]`,
    dateTitle: `[data-testid="DailyContent"] h3`,
    temperatureValue: `[data-testid="ConditionsSummary"] [data-testid="TemperatureValue"]`,
    humidityValue: `[data-testid="HumiditySection"] [data-testid="PercentageValue"]`,
  }

  /* ============ Methods =============== */

  async expandDateRow(index: number) {
    await this.waitAndClick(this.dailyForecastElements.dateRowCollapsed(index.toString()));
    await this.verifyElementVisible(this.dailyForecastElements.dateRowExpanded(index.toString()));
  }

  async collapseDateRow(index: number) {
    await this.waitAndClick(this.dailyForecastElements.dateRowExpanded(index.toString()));
    await this.verifyElementVisible(this.dailyForecastElements.dateRowCollapsed(index.toString()));
  }

  // Return: "Sun 19 | Day"
  async retrieveDayTitle(index: number) {
    const dayTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.dateTitle)
      .nth(0)
      .innerText();
    return dayTemperature;
  }

  // Return: "31°"
  async retrieveDayTemperature(index: number) {
    const dayTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.temperatureValue)
      .nth(0)
      .innerText();
    return dayTemperature;
  }

  // Return: "75%"
  async retrieveDayHumidity(index: number) {
    const dayHumidity = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.humidityValue)
      .nth(0)
      .innerText();
    return dayHumidity;
  }

  // Return: "Sun 19 | Night"
  async retrieveNightTitle(index: number) {
    const dayTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.dateTitle)
      .nth(1)
      .innerText();
    return dayTemperature;
  }

  // Return: "25°"
  async retrieveNightTemperature(index: number) {
    const nightTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.temperatureValue)
      .nth(1)
      .innerText();
    return nightTemperature;
  }

  // Return: "85%"
  async retrieveNightHumidity(index: number) {
    const nightHumidity = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.humidityValue)
      .nth(1)
      .innerText();
    return nightHumidity;
  }

  // For the demo purpose just retrieve Temperature and Humidity
  async retrieveWeatherInfo(numberOfDates: number) {
    for (let i = 0; i < numberOfDates; i++) {
      await this.expandDateRow(i);
      await this.retrieveDayTitle(i);
      await this.retrieveDayTemperature(i);
      await this.retrieveDayHumidity(i);
      await this.retrieveNightTitle(i);
      await this.retrieveNightTemperature(i);
      await this.retrieveNightHumidity(i);
    }
  }

  /*==================Verification==============*/
}
