const path = require('path');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const sass = require('rollup-plugin-sass');

const entryFile = require(path.resolve('package.json')).entry || path.resolve('index.js');
const outputPath = path.resolve('lib');

module.exports = {
    plugins: [
        json({ include: path.resolve('package.json') }),
        babel({
            exclude: [`${path.resolve('node_modules')}/**`, '**/*.scss', '**/*.json'],
            babelrc: false,
            presets: [
                [
                    'env',
                    {
                        targets: {
                            browsers: ['last 2 versions', 'safari >= 7'],
                        },
                        modules: false,
                    },
                ],
                'react',
            ],
            plugins: ['external-helpers', 'transform-object-rest-spread'],
        }),
        sass({
            output: `${path.resolve('lib')}/styles.css`,
            options: {
                outputStyle: 'compressed',
                includePaths: [path.resolve('node_modules')],
            },
        }),
    ],
    entry: entryFile,
    targets: [
        { dest: `${outputPath}/bundle.cjs.js`, format: 'cjs' },
        { dest: `${outputPath}/bundle.es.js`, format: 'es' },
    ],
};
