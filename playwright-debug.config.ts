import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    timeout: 60000,
    use: {
        headless: false,
        trace: 'on',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        baseURL: 'https://pos-test.oolio.dev',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
