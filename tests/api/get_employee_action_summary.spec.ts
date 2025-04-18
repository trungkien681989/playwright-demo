import { APIRequestContext, expect, request, test } from '@playwright/test';
import ENV from '../../helper/env-config';
import { ValidLoginData } from '../../test-data/login/valid-login-data';
import { LoginPage } from '../../objects/pages/login/login-page';
import { DashboardPage } from '../../objects/pages/dashboard/dashboard-page';
import { EmployeeApi } from '../../objects/apis/employee-api';
import { EmployeeActionData } from '../../test-data/employee/employee-data';
import fs from 'fs';

const validLoginData: any = ValidLoginData();
const employeeActionData: any = EmployeeActionData();
let cookie: any;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.goto(`${ENV.LOGIN_URL}`);
    });

    await test.step('Login with valid credential and get cookie', async () => {
        let apiCookie: any;

        page.on('response', async (response) => {
            if (response.url().includes('/auth/validate')) {
                apiCookie = await response.headerValue('Set-Cookie');
                cookie = apiCookie?.split(';')[0];
            }
        });

        await loginPage.login(validLoginData.array[0].username, validLoginData.array[0].password);
        await dashboardPage.verifySidePanelSearchTextShow();

        const textData = {
            Cookie: cookie,
        };
        fs.writeFileSync(`./test-data/login/cookie.json`, JSON.stringify(textData, null, 2));
    });

    await context.close();
});

test(`Test get employee actions summary from API @api @smoke @regression`, async () => {
    const apiContext: APIRequestContext = await request.newContext();
    const employeeApi = new EmployeeApi();

    await test.step('Verify employee actions summary using API', async () => {
        const employeeActionSummary = await employeeApi.getEmployeeActionSummary(apiContext, cookie);
        await employeeApi.verifyEmployeeActionSummary(employeeActionSummary, employeeActionData.array[0]);
        await employeeApi.verifyEmployeeActionSummary(employeeActionSummary, employeeActionData.array[1]);
    });

    await apiContext.dispose();
});
