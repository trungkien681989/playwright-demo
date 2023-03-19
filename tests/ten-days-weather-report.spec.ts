import { test } from '@playwright/test';
import ENV from '../helper/env-config';
import { TenDayPage } from '../pages/weather/ten-day-page';

test('Retrieve 10 days weather @smoke', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const tenDayPage = new TenDayPage(page);

    await test.step('Open 10 days weather page', async () => {
        await tenDayPage.goto(`${ENV.BASE_URL}`);
        await tenDayPage.goToTab('10 Day');
    });

    await test.step('Retrieve Temperature and Humidity of the first 10 days', async () => {
        await tenDayPage.retrieveWeatherInfo(10);
    });
});
