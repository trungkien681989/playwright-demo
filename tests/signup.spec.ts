import { test } from '@playwright/test';
import ENV from '../helper/env-config';
import { SignUpData } from '../test-data/signup/signup-data';
import { SignUpPage } from '../pages/signup/signup-page';
import { LoginPage } from '../pages/login/login-page';

const signupData: any = SignUpData();

test(`Test successful registration with valid data @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Signup with mock response', async () => {
        await signUpPage.signUpMock(signupData.fullName, signupData.email, signupData.password, 200, signupData.mockResponse);
        await loginPage.verifyLoginPageShow();
    });

    await context.close();
});