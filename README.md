## Getting Started

Automation Framework for automating end-to-end tests based on Playwright. It provides features as below:

    1. Page object model
    2. HTML report, Allure Report
    3. Multiple browser: "chromium", "webkit", or "firefox"
    4. Paralell execute test
    5. Multiple test Enviroment

## Installation

The following software are required:

- Nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above, Allure Reports require Java 8 or higher.

## Setup

1. To set up this project on your local machine, clone it from the GitHub repository
2. From the command line in the project's root directory to install all dependencies by run:

   ```bash
   npm install
   ```

3. Next run the following command to download Playwright bundled browsers:

   ```bash
   npx playwright install --with-deps
   ```

4. Finnaly run the following command to install cross environment:

   ```bash
   npm install -g cross-env
   ```

## Tests Run config

In the file `./playwright.config.ts`, you can configure the following options:

- fullyParallel: Configures whether tests should be run in parallel mode - `"fullyParallel: true"`.
  For more information, see the Playwright documentation [here](https://playwright.dev/docs/api/class-testproject#test-project-fully-parallel):
- headless: Configures whether tests should be run in headless mode - `"headless": true`.

## Running Tests

From the command line in the project's root directory:

- Running the tests on PROD environment:

```bash
   npm run test:prod
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
