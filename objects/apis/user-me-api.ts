import { APIRequestContext, expect, request } from "@playwright/test";

export class UserMeApi {

    /* ============ Methods =============== */
    async getUserInfo(apiContext: APIRequestContext, token: string) {
        const response = await apiContext.get(`${process.env.API_BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Token': token,
            }
        });
        return response;
    }

    /*==================Verification==============*/
    async verifyUserInfo(response: any, userData: any) {
        const getUserResponse = JSON.stringify(await response.json());

        expect(JSON.parse(getUserResponse).id).toBe(userData.id);
        expect(JSON.parse(getUserResponse).user_id).toBe(userData.user_id);
        expect(JSON.parse(getUserResponse).external_id).toBe(userData.external_id);
        expect(JSON.parse(getUserResponse).from_existing_elsa_user).toBe(userData.from_existing_elsa_user);
        expect(JSON.parse(getUserResponse).account_type).toBe(userData.account_type);
        expect(JSON.parse(getUserResponse).email).toBe(userData.email);
        expect(JSON.parse(getUserResponse).fullname).toBe(userData.fullname);
    }
}
