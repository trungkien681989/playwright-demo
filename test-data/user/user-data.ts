const UserDataTest = {
    id: '67bd9c412e805dc73034cc16',
    created_at: 1740479553,
    created_at_utc: '2025-02-25 10:32:33',
    updated_at: 1740540647,
    updated_at_utc: '2025-02-26 03:30:47',
    deleted: false,
    deleted_at: null,
    deleted_at_utc: null,
    user_id: 'ltIn2MS3QZ-y_TaYQ5-m7TvZMwsyLqXL',
    external_id: 'FgcNCFEvP1c8PEcKNDgMNiZ4Yzl9AFk4HCVEKB0mL3g=',
    from_existing_elsa_user: false,
    first_login: false,
    account_type: 'basic',
    registered_voice: false,
    email: 'trungkien681989@gmail.com',
    fullname: 'Kien Bui',
    google_calendar_key: null,
    outlook_calendar_key: null,
    username: null,
    allowed_push_notification: false,
    last_changed_password: null,
    last_updated_voice: null,
    payment_method: null,
    learning_purpose: [],
    organization: [],
    self_described: null,
    main_focus: null,
    main_focus_others_text: null,
    first_language_code: null,
    first_language_name: null,
    onboarding_first_lesson_completed: false,
    onboarding_user_completed: false,
    voice_id_audio_link: null,
    voice_registration_stream_id: null,
    organizations: [
        'ELSA_SL_ORG'
    ],
    b2b_organizations: []
}

const UserDataProd = {
    id: '67bd9c412e805dc73034cc16',
    created_at: 1740479553,
    created_at_utc: '2025-02-25 10:32:33',
    updated_at: 1740540647,
    updated_at_utc: '2025-02-26 03:30:47',
    deleted: false,
    deleted_at: null,
    deleted_at_utc: null,
    user_id: 'ltIn2MS3QZ-y_TaYQ5-m7TvZMwsyLqXL',
    external_id: 'FgcNCFEvP1c8PEcKNDgMNiZ4Yzl9AFk4HCVEKB0mL3g=',
    from_existing_elsa_user: false,
    first_login: false,
    account_type: 'basic',
    registered_voice: false,
    email: 'trungkien681989@gmail.com',
    fullname: 'Kien Bui',
    google_calendar_key: null,
    outlook_calendar_key: null,
    username: null,
    allowed_push_notification: false,
    last_changed_password: null,
    last_updated_voice: null,
    payment_method: null,
    learning_purpose: [],
    organization: [],
    self_described: null,
    main_focus: null,
    main_focus_others_text: null,
    first_language_code: null,
    first_language_name: null,
    onboarding_first_lesson_completed: false,
    onboarding_user_completed: false,
    voice_id_audio_link: null,
    voice_registration_stream_id: null,
    organizations: [
        'ELSA_SL_ORG'
    ],
    b2b_organizations: []
}

export const UserData = () => {
    if (process.env.test_env === 'prod') {
        return UserDataProd;
    } else {
        return UserDataTest;
    }
}