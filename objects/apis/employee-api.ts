import { APIRequestContext, expect, request } from "@playwright/test";

export class EmployeeApi {

    /* ============ Methods =============== */
    async getEmployeeActionSummary(apiContext: APIRequestContext, cookie: string) {
        const response = await apiContext.get(`${process.env.API_BASE_URL}/api/v2/dashboard/employees/action-summary`, {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': cookie,
            }
        });
        return response;
    }

    /*==================Verification==============*/
    async verifyEmployeeActionSummary(response: any, employeeData: any) {
        let found = false;
        const getEmployeeActionSummaryResponse = JSON.stringify(await response.json());
        const actions = await JSON.parse(getEmployeeActionSummaryResponse).data;
        for (let i = 0; i < actions.length; i++) {
            let action = actions[i];
            if (action.id.toString().includes(employeeData.id)) {
                expect(action.group).toEqual(employeeData.group);
                expect(action.pendingActionCount).toEqual(employeeData.pendingActionCount);
                found = true;
                break;
            }
        }
        expect(found).toBe(true);
    }
}
