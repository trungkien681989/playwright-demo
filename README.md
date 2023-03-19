## Getting Started

Automation Framework for automating end-to-end tests based on Playwright. It provides features as below:

1. [Page Object Model](https://playwright.dev/docs/pom)
2. [Support multiple browser](https://playwright.dev/docs/why-playwright#support-for-all-browsers)
3. [Paralell execute tests](https://playwright.dev/docs/test-parallel)
4. [HTML Report](https://playwright.dev/docs/test-reporters#html-reporter)
5. [Allure Report](https://www.npmjs.com/package/allure-playwright)
6. Support test on multiple enviroments (test, uat, prod, etc.)
7. Integrate with CI/CD using Github Action

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

![image](https://user-images.githubusercontent.com/49904115/226183572-378e5947-48ae-4a7c-8c0b-1099aa595c9b.png)

![image](https://user-images.githubusercontent.com/49904115/226183625-5d952da2-31b7-4ac8-8fa4-1077bf184a08.png)

- Show HTML test report:

```bash
   npx playwright show-report test-output/html
```

![image](https://user-images.githubusercontent.com/49904115/226183172-4291f595-e606-4983-8599-aa121aa2c774.png)

![image](https://user-images.githubusercontent.com/49904115/226183242-287fd003-5149-41f3-b51f-5ac3463eb75d.png)

## Github Action

The tests can be triggered on the cloud using Github Action. Below is an example of a run:

https://github.com/trungkien681989/playwright-demo/actions/runs/4461262788/jobs/7834966541

![image](https://user-images.githubusercontent.com/49904115/226184232-7eb11123-75af-4854-8f8b-66861607d2fa.png)

## Reference

- To show all Playwrigt option commnad :

```bash
   npx playwright --help
```
