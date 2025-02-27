const SignupMessageDataTest = {
    "emailAlreadyRegisteredMessage": "This email is already linked to an existing account. Please sign in by using the same email address and password.",
}

const SignupMessageDataProd = {
    "emailAlreadyRegisteredMessage": "This email is already linked to an existing account. Please sign in by using the same email address and password.",
}

export const SignupMessageData = () => {
    if (process.env.test_env === 'prod') {
        return SignupMessageDataProd;
    } else {
        return SignupMessageDataTest;
    }
}