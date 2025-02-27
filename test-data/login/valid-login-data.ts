const ValidLoginDataTest = {
    "array": [
        {
            "email": "test123@gmail.com",
            "password": "P@$$word123",
        },
        {
            "email": "test456@gmail.com",
            "password": "P@$$word456",
        }
    ]
}

const ValidLoginDataProd = {
    "array": [
        {
            "email": "trungkien681989@gmail.com",
            "password": "P@$$word123",
        },
        {
            "email": "trungkien+681989@gmail.com",
            "password": "P@$$word123",
        },
        {
            "email": "trungkien681989maxlengthpassword@gmail.com",
            "password": "P@$$word123401234567890123456789",
        },
    ]
}

export const ValidLoginData = () => {
    if (process.env.test_env === 'prod') {
        return ValidLoginDataProd;
    } else {
        return ValidLoginDataTest;
    }
}