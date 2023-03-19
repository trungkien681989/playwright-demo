## Getting Started

Automation Framework for automating end-to-end tests based on Playwright. It provides features as below:

1. [Page Object Model](https://playwright.dev/docs/pom)
2. [Support multiple browser](https://playwright.dev/docs/why-playwright#support-for-all-browsers)
3. [Paralell execute tests](https://playwright.dev/docs/test-parallel)
4. [HTML Report](https://playwright.dev/docs/test-reporters#html-reporter)
5. [Allure Report](https://www.npmjs.com/package/allure-playwright)
6. Support test on multiple enviroments (test, uat, prod, etc.)

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

4. Finnaly run the following command to install cross environment:

   ```bash
   npm install -g cross-env
   ```

## Running Tests

From the command line in the project's root directory:

- Running the tests on PROD environment. By default tests will run without UI (headless mode):

```bash
   npm run test:prod
```

- You can also run the tests on PROD environment with UI (headed mode):

```bash
   npm run test:prod-headed
```

## Tests Report

All output file and report is stored in `./testOutput` folder. You can view both Allure and HTML report.

- Generate Alure report:

```bash
    npm run allure
```

- Show HTML test report:

```bash
   npx playwright show-report test-output/html
```

## Reference

- To show all Playwrigt option commnad :

```bash
   npx playwright --help
```
