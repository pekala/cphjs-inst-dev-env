#!/usr/bin/env node

const { rollup } = require('rollup');
const config = require('../rollup.config');

rollup(config)
    .then(bundle => Promise.all(config.targets.map(target => bundle.write(target))))
    .catch(error => {
        console.log('Could not compile the bundle', error);
        process.exit(1);
    });
