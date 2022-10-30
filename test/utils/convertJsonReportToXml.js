const cucumberJunitConvert = require("cucumber-junit-convert");

const options = {
  inputJsonFile: "./test/reports/merged-output.json",
  outputXmlFile: "./test/reports/merged-output.xml",
  featureNameAsClassName: true,
};

cucumberJunitConvert.convert(options);
