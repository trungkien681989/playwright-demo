const ValidLoginDataTest = {
    "array": [
        {
            "username": "TBD",
            "password": "TBD",
        },
    ]
}

const ValidLoginDataProd = {
    "array": [
        {
            "username": "Admin",
            "password": "admin123",
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