## Getting Started

Automation Framework for automating ui, api, perforrmance tests based on Playwright and K6. It provides features as below:

1. [API Testing with Playwright](https://playwright.dev/docs/api-testing)
2. [Performance Testing with K6](https://grafana.com/docs/k6/latest/)
3. [Support multiple browser](https://playwright.dev/docs/why-playwright#support-for-all-browsers)
4. [Parallel execute tests](https://playwright.dev/docs/test-parallel)
5. [HTML Report](https://playwright.dev/docs/test-reporters#html-reporter)
6. [Allure Report](https://www.npmjs.com/package/allure-playwright)
7. Modularity for easy maintenance with [Page Object Model](https://playwright.dev/docs/pom)
8. Support test on multiple environments (test, prod, etc.)
9. Running smoke, regression, sanity, etc. test base on [Tags](https://playwright.dev/docs/test-annotations#tag-tests)
10. Integrate with CI/CD using [Github Action](https://github.com/features/actions) (Can run with your Github account) or [Jenkins](https://www.jenkins.io/) (Need Jenkins server setup)

## Framework Structure

```
├── AutomationProcessInScrumTeam.pptx
├── ELSA_Speech_Analyzer_test_cases.xlsx
├── LICENSE
├── README.md
├── environments                        ---> provide test environment parameters
├── helper                              ---> util functions to make code DRY(er)
│   ├── env-config.ts
│   └── global-setup.ts
├── jenkins                             ---> CI/CD using Jenkins
│   └── jobs
│       └── demo
├── .github                             ---> CI/CD using Github Actions
│   └── workflows
│       └── playwright.yml
├── objects
│   ├── apis                            ---> store API object classes
│   │   └── employee-api.ts
│   └── pages                           ---> store POM classes
│       ├── base
│       │   └── base-page.ts
│       ├── login
│       │   └── login-page.ts
│       └── dashboard
│           └── dashboard-page.ts
├── storage-state
│   └── search.json                     ---> store login state to make tests run faster
├── package-lock.json
├── package.json
├── playwright.config.js
├── summary.html                        ---> k6 HTML report
├── test-data                           ---> test data loaded base on test environment
│   ├── login
│   │   ├── cookie.json
│   │   ├── invalid-login-data.ts
│   │   └── valid-login-data.ts
│   └── employee
│       └── employee-data.ts
└── tests
    ├── api                             ---> api test using Playwright APIRequestContext
    │   └── get_employee_action_summary.spec.ts
    ├── performance                     ---> performance for api using K6
    │   └── k6_get_employee_action_summary_api_test.js
    └── ui                              ---> ui test cases using Playwright Browsers
        ├── login.spec.ts
        └── search.spec.ts
```

## Installation

The following software are required:

- Nodejs : Download and Install Node JS from

  ```sh
  https://nodejs.org/en/download/
  ```

- Install Java 8 or above, Allure Reports require Java 8 or higher.

## Setup

1. To set up this project on your local machine, clone it from the GitHub repository.
2. From the command line in the project's root directory to install all dependencies by run:

   ```bash
   npm install
   ```

3. Next run the following command to download Playwright supported browsers:

   ```bash
   npx playwright install --with-deps
   ```

4. Finally run the following command to install cross environment:

   ```bash
   npm install -g cross-env
   ```

## Running Tests

From the command line in the project's root directory:

- Running the ui tests on PROD environment. By default tests will run in headless mode for 2 browser chrome and firefox:

```bash
   npm run test:ui
```

- Running the ui tests on PROD environment with browser chrome:

```bash
   npm run test:ui-chrome
```

- Running the ui tests on PROD environment with browser firefox:

```bash
   npm run test:ui-firefox
```

- Running the api tests on PROD environment.

```bash
   npm run test:api
```

- You can run performance test with K6:

```bash
   npm run test:performance
```

## Tests Report

### HTML and Allure report for Playwright test

- Show Playwright HTML test report:

```bash
   npx playwright show-report test-output/html
```

![Image](https://github.com/user-attachments/assets/6cc4470e-8c36-443f-99f0-481c7672bade)

- Generate Allure report for Playwright test:

```bash
    npm run allure
```

![Image](https://github.com/user-attachments/assets/1e6ed291-9f9d-4aac-aafa-3563cee2b284)

### Show HTML test report for K6 performance test

```bash
   open ./summary.html
```

![Image](https://github.com/user-attachments/assets/90a5954f-404b-4bf9-8df5-c65f4be413a4)

## Github Action

The tests can be triggered on the cloud using Github Action. Below is an example of a run:

<https://github.com/trungkien681989/playwright-demo/actions/runs/14533704952>

![Image](https://github.com/user-attachments/assets/18691d27-c868-4fcc-95cb-85d49c69d317)

Playwright HTML test report can be downloaded from the Artifacts:

![Image](https://github.com/user-attachments/assets/321f741c-4201-417c-9c1a-633d35aa18c2)

## Reference

- To show all Playwright option command :

```bash
   npx playwright --help
```
