import { test } from '@playwright/test';
import ENV from '../helper/env-config';
import { LoginPage } from '../pages/login/login-page';
import { ValidLoginData } from '../test-data/login-data';
import { WelcomePage } from '../pages/welcome/welcome-page';

ValidLoginData.array.forEach(data => {
    test(`Login with valid email ${data.email} and valid password ${data.password} @smoke @regression`, async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const loginPage = new LoginPage(page);
        const welcomePage = new WelcomePage(page);

        await test.step('Open Login Page', async () => {
            await loginPage.goto(`${ENV.LOGIN_URL}`);
        });

        await test.step('Login with valid credential', async () => {
            await loginPage.login(data.email, data.password);
            await welcomePage.verifyGetStartedButtonShow();
        });

        await context.close();
    });
})