const fs = require('fs-extra');
const path = require('path');

const reportsDirPath = path.join(__dirname, '../reports');

fs.emptyDirSync(reportsDirPath);