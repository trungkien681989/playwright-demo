const InvalidLoginDataTest = {
}

const InvalidLoginDataProd = {
    "wrongUsername": "Kien",
    "wrongPassword": "P@$$word1234",
}

export const InvalidLoginData = () => {
    if (process.env.test_env === 'prod') {
        return InvalidLoginDataProd;
    } else {
        return InvalidLoginDataTest;
    }
}