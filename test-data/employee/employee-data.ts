const EmployeeActionDataTest = {
    "array": [
        {
            id: 4,
            group: 'Pending Self Reviews',
            pendingActionCount: 1,
        },
        {
            id: 5,
            group: 'Candidates To Interview',
            pendingActionCount: 1,
        },
    ]
}

const EmployeeActionDataProd = {
    "array": [
        {
            id: 4,
            group: 'Pending Self Reviews',
            pendingActionCount: 1,
        },
        {
            id: 5,
            group: 'Candidates To Interview',
            pendingActionCount: 1,
        },
    ]
}

export const EmployeeActionData = () => {
    if (process.env.test_env === 'prod') {
        return EmployeeActionDataProd;
    } else {
        return EmployeeActionDataTest;
    }
}