const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
    presets: [
        [
            require.resolve('babel-preset-env'),
            {
                targets: {
                    browsers: ['last 2 versions', 'safari >= 7'],
                },
            },
        ],
        require.resolve('babel-preset-react'),
    ],
    plugins: [require('babel-plugin-transform-object-rest-spread')],
    babelrc: false,
});
