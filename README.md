# JS-wdio-cucumber-demoqa.com

Automated scenarios in JS for https://demoqa.com/ using Node.js + WebdriverIO + Cucumber + Chai

Running:

- use `npm install` command to setup all dependencies.
- use `npm test` command to run all tests.
- use `npm test -- --maxInstances='2'` command to define a number of browser instances to run tests.
- use `npm test -- --cucumberOpts.tagExpression='@smoke'` command to run a test with a particular tag.
- use `npm run report:open` commant to open HTML report.
- use `npm run convert` to convert JSON report to XML format.
