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
            "email": "nguyenthihongnhung20101989@gmail.com",
            "password": "P@$$word456",
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