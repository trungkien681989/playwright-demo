const ValidLoginDataTest = {
    "array": [
        {
            "email": "test123@gmail.com",
            "password": "P@$$word123",
        }
    ]
}

const ValidLoginDataProd = {
    "array": [
        {
            "email": "trungkien681989@gmail.com",
            "password": "P@$$word123",
        }
    ]
}

export const ValidLoginData = () => {
    if (process.env.test_env === 'prod') {
        return ValidLoginDataProd;
    } else {
        return ValidLoginDataTest;
    }
}