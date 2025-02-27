import { test } from '@playwright/test';
import ENV from '../../helper/env-config';
import { ValidLoginData } from '../../test-data/login/valid-login-data';
import { InvalidLoginData } from '../../test-data/login/invalid-login-data';
import { LoginPage } from '../../objects/pages/login/login-page';
import { WelcomePage } from '../../objects/pages/welcome/welcome-page';

const validLoginData: any = ValidLoginData();
const invalidLoginData: any = InvalidLoginData();

validLoginData.array.forEach(data => {
    test(`Login_01 Test successful login with valid email ${data.email} @ui @smoke @regression`, async ({ browser }) => {
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

test(`Login_11 Test login with an invalid email format @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with an invalid email format', async () => {
        await loginPage.login(invalidLoginData.emailInvalidFormat, validLoginData.array[0].password);
        await loginPage.verifyEmailAlert('Email is invalid');
    });

    await context.close();
});

test(`Login_12 Test login with incorrect credentials @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const invalidCredential = 'We couldn’t sign you in! Make sure you enter the correct password. If the problem persists, consider resetting your password or creating a new account.'

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with wrong email and correct password', async () => {
        await loginPage.login(invalidLoginData.wrongEmail, validLoginData.array[0].password);
        await loginPage.verifyIncorrectCredentialAlert(invalidCredential);
    });

    await test.step('Login with correct email and wrong password', async () => {
        await loginPage.login(validLoginData.array[0].email, invalidLoginData.wrongPassword);
        await loginPage.verifyIncorrectCredentialAlert(invalidCredential);
    });

    await test.step('Login with wrong email and wrong password', async () => {
        await loginPage.login(invalidLoginData.wrongEmail, invalidLoginData.wrongPassword);
        await loginPage.verifyIncorrectCredentialAlert(invalidCredential);
    });

    await context.close();
});

test(`Login_13 Test login when both fields are empty @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login when both fields are empty', async () => {
        await loginPage.login('', '');
        await loginPage.verifyEmailAlert('Email is required');
        await loginPage.verifyPasswordAlert('Password is required');
    });

    await context.close();
});
