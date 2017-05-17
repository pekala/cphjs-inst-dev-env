const path = require('path');
const fs = require('fs');

// this is necessary because yarn behaves differently than npm
// when it comes to placing symlinks in .bin folders
// see https://github.com/yarnpkg/yarn/issues/760
module.exports = function getBinPath(name) {
    const binPath = path.resolve(__dirname, `../../node_modules/.bin/${name}`);
    if (fs.existsSync(binPath)) {
        return binPath;
    }
    return path.resolve(`node_modules/.bin/${name}`);
};
