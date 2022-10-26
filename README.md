# JS-wdio-cucumber-demoqa.com

Automated scenarios in JS for https://demoqa.com/ using Node.js + WebdriverIO + Cucumber + Chai

Running:

1. clone the repository.
2. use "npm install" command to setup all dependencies.
3. use "npm test" command to run all tests.
4. use "npm test -- --maxInstances='2'" command to define a number of browser instances to run tests.
5. use "npm test -- --cucumberOpts.tagExpression='@smoke'" command to run a test with a particular tag.
