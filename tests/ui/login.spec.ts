import { test } from '@playwright/test';
import ENV from '../../helper/env-config';
import { ValidLoginData } from '../../test-data/login/valid-login-data';
import { LoginPage } from '../../objects/pages/login/login-page';
import { WelcomePage } from '../../objects/pages/welcome/welcome-page';

const validLoginData: any = ValidLoginData();

validLoginData.array.forEach(data => {
    test.only(`Test successful login with valid email ${data.email} @ui @smoke @regression`, async ({ browser }) => {
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