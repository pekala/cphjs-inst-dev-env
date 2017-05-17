#!/usr/bin/env node

const spawn = require('child_process').spawnSync;
const jestConfig = require('../jest-config.js');
const getBin = require('./utils/get-bin');

const result = spawn(
    getBin('jest'),
    [`--config=${JSON.stringify(jestConfig)}`, ...process.argv.slice(2)],
    {
        stdio: 'inherit',
    }
);

process.exit(result.status);
