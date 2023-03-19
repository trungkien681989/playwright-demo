import { test } from '@playwright/test';
import ENV from '../helper/env-config';
import { TenDayPage } from '../pages/weather/ten-day-page';
import { Localize } from '../test-data/localize';

Localize.array.forEach(data => {
    test(`Retrieve 10 days weather of ${data.name} @smoke`, async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const tenDayPage = new TenDayPage(page);

        await test.step('Open 10 days weather page', async () => {
            await tenDayPage.goto(`${ENV.BASE_URL}${data.url}`);
            await tenDayPage.goToTab(data.tenDays);
        });

        await test.step('Retrieve Temperature and Humidity of the first 10 days', async () => {
            await tenDayPage.retrieveWeatherInfo(10, data.output);
        });
    });
})