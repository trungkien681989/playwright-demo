import { test } from '@playwright/test';
import ENV from '../../helper/env-config';
import { ValidLoginData } from '../../test-data/login/valid-login-data';
import { InvalidLoginData } from '../../test-data/login/invalid-login-data';
import { LoginPage } from '../../objects/pages/login/login-page';
import { DashboardPage } from '../../objects/pages/dashboard/dashboard-page';

const validLoginData: any = ValidLoginData();
const invalidLoginData: any = InvalidLoginData();

validLoginData.array.forEach(data => {
    test(`Login_01 Test successful login with valid username ${data.username} @ui @smoke @regression`, async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await test.step('Open Login Page', async () => {
            await loginPage.goto(`${ENV.LOGIN_URL}`);
        });

        await test.step('Login with valid credential', async () => {
            await loginPage.login(data.username, data.password);
            await dashboardPage.verifySidePanelSearchTextShow();
        });

        await context.close();
    });
})

test(`Login_02 Test required validation for both Username and Password field @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login when both fields are empty', async () => {
        await loginPage.login('', '');
        await loginPage.verifyUsernameAlert('Required');
        await loginPage.verifyPasswordAlert('Required');
    });

    await context.close();
});

test(`Login_03 Test required validation for Username field @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Required validation for Username field', async () => {
        await loginPage.login('', validLoginData.array[0].password);
        await loginPage.verifyUsernameAlert('Required');
    });

    await context.close();
});

test(`Login_04 Test required validation for Password field @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Required validation for Password field', async () => {
        await loginPage.login(validLoginData.array[0].username, '');
        await loginPage.verifyPasswordAlert('Required');
    });

    await context.close();
});

test(`Login_16 Test login with incorrect username and password @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with incorrect username and password', async () => {
        await loginPage.login(invalidLoginData.wrongUsername, invalidLoginData.wrongPassword);
        await loginPage.verifyIncorrectCredentialAlert();
    });

    await context.close();
});

test(`Login_17 Test login with incorrect username and correct password @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with incorrect username and correct password', async () => {
        await loginPage.login(invalidLoginData.wrongUsername, validLoginData.array[0].password);
        await loginPage.verifyIncorrectCredentialAlert();
    });

    await context.close();
});

test(`Login_18 Test login with correct username and incorrect password @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with correct username and incorrect password', async () => {
        await loginPage.login(validLoginData.array[0].username, invalidLoginData.wrongPassword);
        await loginPage.verifyIncorrectCredentialAlert();
    });

    await context.close();
});
