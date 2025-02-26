import { APIRequestContext, expect, request, test } from '@playwright/test';
import ENV from '../../helper/env-config';
import { ValidLoginData } from '../../test-data/login/valid-login-data';
import { LoginPage } from '../../objects/pages/login/login-page';
import { WelcomePage } from '../../objects/pages/welcome/welcome-page';
import { UserMeApi } from '../../objects/apis/user-me-api';
import { UserData } from '../../test-data/user/user-data';

const validLoginData: any = ValidLoginData();
const userData: any = UserData();
let token: string;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const welcomePage = new WelcomePage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with valid credential and get token', async () => {
        let apiResponse = null;

        page.on('response', async (response) => {
            if (response.url().includes('/login/basic')) {
                apiResponse = await response.json();
            }
        });

        await loginPage.login(validLoginData.array[0].email, validLoginData.array[0].password);
        await welcomePage.verifyGetStartedButtonShow();

        token = await JSON.parse(JSON.stringify(apiResponse)).access_token
    });

    await context.close();
});

test(`Test get user derail from API @api @smoke @regression`, async () => {
    const apiContext: APIRequestContext = await request.newContext();
    const userMeApi = new UserMeApi();

    await test.step('Verify current user detail using API', async () => {
        const getUser = await userMeApi.getUserInfo(apiContext, token);
        await userMeApi.verifyUserInfo(getUser, userData);
    });

    await apiContext.dispose();
});