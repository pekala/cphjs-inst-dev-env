module.exports = {
    parser: require.resolve('babel-eslint'),
    extends: [
        require.resolve('eslint-config-airbnb'),
        'plugin:react/recommended',
        'plugin:import/warnings',
        require.resolve('eslint-config-prettier'),
        require.resolve('eslint-config-prettier/react')
    ],
    env: {
        'browser': true,
        'es6': true,
        'node': true,
    },
    root: true,
    plugins: ['compat', 'prettier', 'import'],
    parserOptions: {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'allowImportExportEverywhere': true,
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true,
        },
    },
    rules: {
        'compat/compat': 'error',
        'prettier/prettier': ['error', {
            'trailingComma': 'es5',
            'singleQuote': true,
            'tabWidth': 4,
            'printWidth': 90,
        }]
    }
}