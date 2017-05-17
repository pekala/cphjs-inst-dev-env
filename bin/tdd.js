#!/usr/bin/env node

const path = require('path');
const spawn = require('child_process').spawnSync;
const getBin = require('./utils/get-bin');
const jestConfig = require('../jest-config.js');

const rollupConfig = path.resolve(__dirname, '../rollup.config.js');
const cliOptions = process.argv.slice(2).join(' ');

const result = spawn(
    getBin('concurrently'),
    [
        `--kill-others`,
        `--raw`,
        `"${getBin('rollup')} -c ${rollupConfig} --watch"`,
        `"${getBin('jest')} --watch --config='${JSON.stringify(jestConfig)}' ${cliOptions}"`,
    ],
    {
        stdio: 'inherit',
    }
);

process.exit(result.status);
