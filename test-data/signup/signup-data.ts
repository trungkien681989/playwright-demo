const SignUpDataTest = {
    "fullName": "John Doe",
    "email": "test123@gmail.com",
    "password": "P@$$word123",
    "mockResponseSuccess": {
        id: '67bd9c412e805dc73034cc11',
        email: 'test123@gmail.com',
        created_at: 1740479553,
        created_at_utc: '2025-02-25 10:32:33',
        updated_at: null,
        updated_at_utc: null,
        user_id: 'ltIn2MS3QZ-y_TaYQ5-m7TvZMwsyLqXL',
        external_id: 'FgcNCFEvP1c8PEcKNDgMNiZ4Yzl9AFk4HCVEKB0mL3g=',
        from_existing_elsa_user: false,
        first_login: true,
        fullname: 'John Doe',
        access_token: 'F3S0w0bysBQFdbjtxpFurijM/IAXdR5/rim8XayXw8eiJNKSE6c1b76xZEMhOTpTdm9vn+/ohkXajnE2FEO5/xlDKKbeoFRFKELRcRpm6j06aEyW5pdqUrKMohbfdWkQX4ypVKDvF+fJVinpiZ0D1mY1yKVeY/bzECpOgjzjeNUCJVdst0b6/XKFSWP8yleRgNaNT+KFgANfU2qDCiDgQw=3',
        refresh_token: '98235655',
        account_type: 'basic',
        google_calendar_key: null,
        outlook_calendar_key: null,
        self_described: null,
        main_focus: null,
        first_language_code: null,
        first_language_name: null,
        onboarding_first_lesson_completed: false,
        onboarding_user_completed: false,
        organization: []
    },
    "mockResponseEmailAlreadyRegistered": {
        detail: 'Email trungkien681989@gmail.com is already registered. Please click log in with email or use a different account'
    }
}

const SignUpDataProd = {
    "fullName": "Kevin Bui",
    "email": "trungkien06081989@gmail.com",
    "emailInvalidFormat": "trungkien681989@gmailcom",
    "password": "P@$$word123",
    "passwordMaximumLength": "P@$$word123401234567890123456789",
    "passwordNotMeetCriteria": "passwordNotMeetCriteria",
    "mockResponseSuccess": {
        id: '67bd9c412e805dc73034cc16',
        email: 'trungkien681989@gmail.com',
        created_at: 1740479553,
        created_at_utc: '2025-02-25 10:32:33',
        updated_at: null,
        updated_at_utc: null,
        user_id: 'ltIn2MS3QZ-y_TaYQ5-m7TvZMwsyLqXL',
        external_id: 'FgcNCFEvP1c8PEcKNDgMNiZ4Yzl9AFk4HCVEKB0mL3g=',
        from_existing_elsa_user: false,
        first_login: true,
        fullname: 'Kien Bui',
        access_token: 'F3S0w0bysBQFdbjtxpFurijM/IAXdR5/rim8XayXw8eiJNKSE6c1b76xZEMhOTpTdm9vn+/ohkXajnE2FEO5/xlDKKbeoFRFKELRcRpm6j06aEyW5pdqUrKMohbfdWkQX4ypVKDvF+fJVinpiZ0D1mY1yKVeY/bzECpOgjzjeNUCJVdst0b6/XKFSWP8yleRgNaNT+KFgANfU2qDCiDgQw==',
        refresh_token: '98235655',
        account_type: 'basic',
        google_calendar_key: null,
        outlook_calendar_key: null,
        self_described: null,
        main_focus: null,
        first_language_code: null,
        first_language_name: null,
        onboarding_first_lesson_completed: false,
        onboarding_user_completed: false,
        organization: []
    },
    "mockResponseSpecialChars": {
        id: '67bd9c412e805dc73034cc16',
        email: '日向ヒナタ@gmail.com',
        created_at: 1740479553,
        created_at_utc: '2025-02-25 10:32:33',
        updated_at: null,
        updated_at_utc: null,
        user_id: 'ltIn2MS3QZ-y_TaYQ5-m7TvZMwsyLqXL',
        external_id: 'FgcNCFEvP1c8PEcKNDgMNiZ4Yzl9AFk4HCVEKB0mL3g=',
        from_existing_elsa_user: false,
        first_login: true,
        fullname: '日向ヒナタ',
        access_token: 'F3S0w0bysBQFdbjtxpFurijM/IAXdR5/rim8XayXw8eiJNKSE6c1b76xZEMhOTpTdm9vn+/ohkXajnE2FEO5/xlDKKbeoFRFKELRcRpm6j06aEyW5pdqUrKMohbfdWkQX4ypVKDvF+fJVinpiZ0D1mY1yKVeY/bzECpOgjzjeNUCJVdst0b6/XKFSWP8yleRgNaNT+KFgANfU2qDCiDgQw==',
        refresh_token: '98235655',
        account_type: 'basic',
        google_calendar_key: null,
        outlook_calendar_key: null,
        self_described: null,
        main_focus: null,
        first_language_code: null,
        first_language_name: null,
        onboarding_first_lesson_completed: false,
        onboarding_user_completed: false,
        organization: []
    },
    "mockResponseEmailAlreadyRegistered": {
        detail: 'Email trungkien681989@gmail.com is already registered. Please click log in with email or use a different account'
    }
}

export const SignUpData = () => {
    if (process.env.test_env === 'prod') {
        return SignUpDataProd;
    } else {
        return SignUpDataTest;
    }
}