import { Page } from '@playwright/test';
import { MainPage } from '../weather/main-page';
import { writeJsonFIle } from '../../helper/write-json';

export class TenDayPage extends MainPage {
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly dailyForecastElements = {
    dateRowCollapsed: (index: string) => `[data-testid="ExpandedDetailsCard"][id="detailIndex${index}"][data-track-string="detailsExpand"]`,
    dateRowExpanded: (index: string) => `[data-testid="ExpandedDetailsCard"][id="detailIndex${index}"][data-track-string="false"]`,
    dateTitle: `[data-testid="DailyContent"] h3`,
    temperatureValue: `[data-testid="ConditionsSummary"] [data-testid="TemperatureValue"]`,
    humidityValue: `[data-testid="HumiditySection"] [data-testid="PercentageValue"]`,
  }

  /* ============ Methods =============== */

  async expandDateRow(index: number) {
    const isCollapsed = await this.page.isVisible(this.dailyForecastElements.dateRowCollapsed(index.toString()));
    if (isCollapsed) {
      await this.waitAndClick(this.dailyForecastElements.dateRowCollapsed(index.toString()));
      await this.verifyElementVisible(this.dailyForecastElements.dateRowExpanded(index.toString()));
    }
  }

  async collapseDateRow(index: number) {
    const isExpanded = await this.page.isVisible(this.dailyForecastElements.dateRowExpanded(index.toString()));
    if (isExpanded) {
      await this.waitAndClick(this.dailyForecastElements.dateRowExpanded(index.toString()));
      await this.verifyElementVisible(this.dailyForecastElements.dateRowCollapsed(index.toString()));
    }
  }

  async retrieveDayTitle(index: number) {
    const dayTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.dateTitle)
      .nth(0)
      .innerText();
    return dayTemperature; // Return: "Sun 19 | Day"
  }

  async retrieveDayTemperature(index: number) {
    const dayTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.temperatureValue)
      .nth(0)
      .innerText();
    return dayTemperature; // Return: "31°"
  }

  async retrieveDayHumidity(index: number) {
    const dayHumidity = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.humidityValue)
      .nth(0)
      .innerText();
    return dayHumidity; // Return: "75%"
  }

  async retrieveNightTitle(index: number) {
    const dayTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.dateTitle)
      .nth(1)
      .innerText();
    return dayTemperature; // Return: "Sun 19 | Night"
  }

  async retrieveNightTemperature(index: number) {
    const nightTemperature = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.temperatureValue)
      .nth(1)
      .innerText();
    return nightTemperature; // Return: "25°"
  }

  async retrieveNightHumidity(index: number) {
    const nightHumidity = await this.page
      .locator(this.dailyForecastElements.dateRowExpanded(index.toString()))
      .locator(this.dailyForecastElements.humidityValue)
      .nth(1)
      .innerText();
    return nightHumidity; // Return: "85%"
  }

  // For the demo purpose just retrieve Temperature and Humidity
  async retrieveWeatherInfo(numberOfDates: number) {
    let jsonArray = [{}];
    for (let i = 1; i <= numberOfDates; i++) {
      await this.expandDateRow(i);
      // Retrieve Temperature and Humidity
      const dayTitle = (await this.retrieveDayTitle(i)).replace(' | Day', '');
      const dayTemperature = await this.retrieveDayTemperature(i);
      const dayHumidity = await this.retrieveDayHumidity(i);
      const nightTemperature = await this.retrieveNightTemperature(i);
      const nightHumidity = await this.retrieveNightHumidity(i);
      // Define json object
      const jsonObject = {
        date: dayTitle,
        day: {
          temperature: dayTemperature,
          humidity: dayHumidity,
        },
        night: {
          temperature: nightTemperature,
          humidity: nightHumidity,
        }
      };
      jsonArray.push(jsonObject); // Append value to array
    }
    jsonArray.shift(); // Remove unnecessary item from original array
    await writeJsonFIle(jsonArray, './output.json');
  }

  /*==================Verification==============*/
}
