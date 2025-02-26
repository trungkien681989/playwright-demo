import { test } from '@playwright/test';
import ENV from '../helper/env-config';
import { SignUpData } from '../test-data/signup/signup-data';
import { SignupMessageData } from '../test-data/signup/signup-message-data';
import { SignUpPage } from '../pages/signup/signup-page';
import { LoginPage } from '../pages/login/login-page';

const signupData: any = SignUpData();
const signupMessageData: any = SignupMessageData();

test(`Test successful registration with valid data using mock response @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Signup successfully using mock response', async () => {
        await signUpPage.signUpMock(signupData.fullName, signupData.email, signupData.password, 200, signupData.mockResponseSuccess);
        await loginPage.verifyLoginPageShow();
    });

    await context.close();
});

test(`Test Email already registered using mock response @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Signup with Email already registered using mock response', async () => {
        await signUpPage.signUpMock(signupData.fullName, signupData.email, signupData.password, 409, signupData.mockResponseEmailAlreadyRegistered);
        await signUpPage.verifyEmailAlreadyRegistered(signupMessageData.emailAlreadyRegisteredMessage);
    });

    await context.close();
});

test(`Test Email already registered using real response @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Signup with Email already registered using mock response', async () => {
        await signUpPage.signUp(signupData.fullName, signupData.email, signupData.password);
        await signUpPage.verifyEmailAlreadyRegistered(signupMessageData.emailAlreadyRegisteredMessage);
    });

    await context.close();
});
