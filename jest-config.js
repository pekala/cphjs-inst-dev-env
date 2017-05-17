const path = require('path');
const fs = require('fs');

let setupFileExists = false;
const setupFilePath = path.resolve('test-setup.js');
if (fs.existsSync(setupFilePath)) {
    setupFileExists = true;
}

module.exports = {
    testRegex: '.*\\.test\\.js$',
    moduleFileExtensions: ['js'],
    moduleDirectories: ['node_modules'],
    rootDir: path.resolve('.'),
    setupFiles: setupFileExists ? [setupFilePath] : undefined,
    transform: {
        '^.+\\.js$': path.resolve(__dirname, 'jest-babel-transform.js'),
    },
};
