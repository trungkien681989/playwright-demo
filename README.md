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

## Tests Output

- After the test finish. An output JSON file named `output.json` will be generated in the root directory. It contains weather info (Temperature, Humidity) of Singapore for Day and Night in next 10 days.
- The weather info output will also be available in console and in Allure, HTML reports.

## Tests Report

All output file and report is stored in `./testOutput` folder. You can view both Allure and HTML report.

- Generate Allure report:

```bash
    npm run allure
```

<img width="1456" alt="image" src="https://user-images.githubusercontent.com/49904115/226160182-856de4c6-3f76-4621-8ce0-4a5c5df5a263.png">

<img width="1461" alt="image" src="https://user-images.githubusercontent.com/49904115/226160195-e24cbb50-bb23-4ab5-ac0a-64d3122d6a3d.png">

- Show HTML test report:

```bash
   npx playwright show-report test-output/html
```

<img width="1021" alt="image" src="https://user-images.githubusercontent.com/49904115/226160103-a437498b-cd01-49d5-bb68-610ca15c381f.png">

## Reference

- To show all Playwrigt option commnad :

```bash
   npx playwright --help
```

## Github Action

The tests can be triggered on the cloud using Github Action. Below is an example of a run:

https://github.com/trungkien681989/playwright-demo/actions/runs/4459482123/jobs/7831963697

<img width="1433" alt="image" src="https://user-images.githubusercontent.com/49904115/226160065-54eb5a40-c6fd-4e2e-8478-244dfe988ab3.png">
