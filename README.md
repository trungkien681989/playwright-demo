## Getting Started

Automation Framework for automating end-to-end tests based on Playwright. It provides features as below:

1. [Page Object Model](https://playwright.dev/docs/pom)
2. [Support multiple browser](https://playwright.dev/docs/why-playwright#support-for-all-browsers)
3. [Paralell execute tests](https://playwright.dev/docs/test-parallel)
4. [HTML Report](https://playwright.dev/docs/test-reporters#html-reporter)
5. [Allure Report](https://www.npmjs.com/package/allure-playwright)
6. Support test on multiple environments (test, prod, etc.)
7. Integrate with CI/CD using Github Action (Can run with your Github account) or Jenkins (Need Jenkins server setup)

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

- Running the smoke tests on PROD environment. By default tests will run without UI (headless mode):

```bash
   npm run test:smoke
```

- Running the regression tests on PROD environment. By default tests will run without UI (headless mode):

```bash
   npm run test:regression
```

- You can also run all test cases on PROD environment with UI (headed mode):

```bash
   npm run test:headed
```

- You can run performance test with K6:

```bash
   npm run test:performance
```

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

https://github.com/trungkien681989/playwright-demo/actions/runs/4461520231

![image](https://user-images.githubusercontent.com/49904115/226184232-7eb11123-75af-4854-8f8b-66861607d2fa.png)

Playwright HTML test report can be downloaded from the Artifacts:

![image](https://user-images.githubusercontent.com/49904115/226188621-5dbb8b25-b2d4-47aa-8a23-1165785888d2.png)

## Reference

- To show all Playwrigt option commnad :

```bash
   npx playwright --help
```
