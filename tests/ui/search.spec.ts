import { test } from '@playwright/test';
import ENV from '../../helper/env-config';
import { ValidLoginData } from '../../test-data/login/valid-login-data';
import { LoginPage } from '../../objects/pages/login/login-page';
import { DashboardPage } from '../../objects/pages/dashboard/dashboard-page';

const validLoginData: any = ValidLoginData();
const storageStateFile = 'storage-state/search.json';

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with valid credential', async () => {
        await loginPage.login(validLoginData.array[0].username, validLoginData.array[0].password);
        await dashboardPage.verifySidePanelSearchTextShow();
    });

    await page.context().storageState({ path: storageStateFile });

    await context.close();
});

test(`Search_01 Search for an exact menu item (e.g., "Admin") @ui @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext({ storageState: storageStateFile });
    const page = await context.newPage();
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Dashboard Page', async () => {
        await dashboardPage.goto(`${ENV.DASHBOARD_URL}`);
    });

    await test.step('Search for an exact menu item', async () => {
        const listFeatureShouldShow = ['Admin'];
        const listFeatureShouldNotShow = ['PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

        await dashboardPage.searchFeatureFromSideBar('Admin');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldShow);
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);
    });

    await context.close();
});

test(`Search_02 Search for a menu item using partial name (e.g., "P") @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext({ storageState: storageStateFile });
    const page = await context.newPage();
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Dashboard Page', async () => {
        await dashboardPage.goto(`${ENV.DASHBOARD_URL}`);
    });

    await test.step('Search for a menu item using partial name', async () => {
        const listFeatureShouldShow = ['PIM', 'Performance'];
        const listFeatureShouldNotShow = ['Admin', 'Leave', 'Time', 'Recruitment', 'My Info', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

        await dashboardPage.searchFeatureFromSideBar('P');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldShow);
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);
    });

    await context.close();
});

test(`Search_03 Ensure search is not case sensitive @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext({ storageState: storageStateFile });
    const page = await context.newPage();
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Dashboard Page', async () => {
        await dashboardPage.goto(`${ENV.DASHBOARD_URL}`);
    });

    await test.step('Ensure search is not case sensitive', async () => {
        const listFeatureShouldShow = ['PIM'];
        const listFeatureShouldNotShow = ['Admin', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

        await dashboardPage.searchFeatureFromSideBar('PIM');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldShow);
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);

        await dashboardPage.searchFeatureFromSideBar('pim');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldShow);
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);

        await dashboardPage.searchFeatureFromSideBar('Pim');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldShow);
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);
    });

    await context.close();
});

test(`Search_09 Enter very long string in search @ui @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext({ storageState: storageStateFile });
    const page = await context.newPage();
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Dashboard Page', async () => {
        await dashboardPage.goto(`${ENV.DASHBOARD_URL}`);
    });

    await test.step('Paste 200+ character input in the search field', async () => {
        const listFeatureShouldNotShow = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

        await dashboardPage.searchFeatureFromSideBar('Veryloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);
    });

    await context.close();
});

test(`Search_11 Use of non-alphabetic input (e.g., numbers) @ui @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext({ storageState: storageStateFile });
    const page = await context.newPage();
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Dashboard Page', async () => {
        await dashboardPage.goto(`${ENV.DASHBOARD_URL}`);
    });

    await test.step('Use of non-alphabetic input', async () => {
        const listFeatureShouldNotShow = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

        await dashboardPage.searchFeatureFromSideBar('123');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);
    });

    await context.close();
});

test(`Search_12 Invalid Search input @ui @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext({ storageState: storageStateFile });
    const page = await context.newPage();
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Dashboard Page', async () => {
        await dashboardPage.goto(`${ENV.DASHBOARD_URL}`);
    });

    await test.step('Invalid Search input', async () => {
        const listFeatureShouldNotShow = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

        await dashboardPage.searchFeatureFromSideBar('invalid');
        await dashboardPage.verifySidePanelListFeaturesShow(listFeatureShouldNotShow, false);
    });

    await context.close();
});
