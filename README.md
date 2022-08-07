# JS-wdio-cucumber-demoqa.com

Automated scenarios in JS for https://demoqa.com/ using Node.js + WebdriverIO + Cucumber + Chai

Running:

1. use "npm test" command to run all tests.
2. use "npm test -- --cucumberOpts.tagExpression='@home'" to run particular tag.
3. use "allure generate reports/allure-results --clean -o reports/allure-report" to generate a report.
4. use "allure open reports/allure-report" to open the report.
