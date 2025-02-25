const SignUpDataTest = {
    "fullName": "John Doe",
    "email": "test123@gmail.com",
    "password": "P@$$word123",
}

const SignUpDataProd = {
    "fullName": "Kevin Bui",
    "email": "trungkien681989@gmail.com",
    "password": "P@$$word123",
}

export const SignUpData = () => {
    if (process.env.test_env === 'prod') {
        return SignUpDataProd;
    } else {
        return SignUpDataTest;
    }
}