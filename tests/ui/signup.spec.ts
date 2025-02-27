import { test } from '@playwright/test';
import ENV from '../../helper/env-config';
import { SignUpData } from '../../test-data/signup/signup-data';
import { SignupMessageData } from '../../test-data/signup/signup-message-data';
import { SignUpPage } from '../../objects/pages/signup/signup-page';
import { LoginPage } from '../../objects/pages/login/login-page';

const signupData: any = SignUpData();
const signupMessageData: any = SignupMessageData();

test(`Signup_01 Test successful registration with valid data @ui @mock @smoke @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Sign-up successfully using mock response', async () => {
        await signUpPage.signUpMock(signupData.mockResponseSuccess.fullname, signupData.mockResponseSuccess.email, signupData.password, 200, signupData.mockResponseSuccess);
        await loginPage.verifyLoginPageShow();
    });

    await context.close();
});

test(`Signup_11 Test the sign-up process with an email containing special characters @ui @mock @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Sign-up process with an email containing special characters', async () => {
        await signUpPage.signUpMock(signupData.mockResponseSpecialChars.fullname, signupData.mockResponseSpecialChars.email, signupData.password, 200, signupData.mockResponseSpecialChars);
        await loginPage.verifyLoginPageShow();
    });

    await context.close();
});

test(`Signup_13 Test the sign-up process with the password at the maximum length supported @ui @mock @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Sign-up process with the password at the maximum length supported', async () => {
        await signUpPage.signUpMock(signupData.mockResponseSuccess.fullname, signupData.mockResponseSuccess.email, signupData.passwordMaximumLength, 200, signupData.mockResponseSuccess);
        await loginPage.verifyLoginPageShow();
    });

    await context.close();
});

test(`Signup_14 Test the system's behavior when the email format is invalid @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Signup with the email format is invalid', async () => {
        await signUpPage.signUp(signupData.fullName, signupData.emailInvalidFormat, signupData.password);
        await signUpPage.verifyEmailAlert('Email is invalid');
    });

    await context.close();
});

test(`Signup_15 Test the system when the password does not meet the required format @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Signup with the password does not meet the required format', async () => {
        await signUpPage.signUp(signupData.fullName, signupData.emailUnregistered, signupData.passwordNotMeetCriteria);
        await signUpPage.verifyIncorrectCredentialAlert('The email address or password you entered is invalid');
    });

    await context.close();
});

test(`Signup_16 Test sign-up with an email that is already in use using mock response @ui @mock @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Sign-up with an email that is already in use using mock response', async () => {
        await signUpPage.signUpMock(signupData.fullName, signupData.email, signupData.password, 409, signupData.mockResponseEmailAlreadyRegistered);
        await signUpPage.verifyEmailAlreadyRegistered(signupMessageData.emailAlreadyRegisteredMessage);
    });

    await context.close();
});

test(`Signup_16 Test sign-up with an email that is already in use @ui @regression`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);

    await test.step('Open Sign Up Page', async () => {
        await signUpPage.goto(`${ENV.SIGN_UP_URL}`);
    });

    await test.step('Sign-up with an email that is already in use using real data', async () => {
        await signUpPage.signUp(signupData.fullName, signupData.email, signupData.password);
        await signUpPage.verifyEmailAlreadyRegistered(signupMessageData.emailAlreadyRegisteredMessage);
    });

    await context.close();
});
