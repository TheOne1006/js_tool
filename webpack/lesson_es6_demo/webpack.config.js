const webpack = require('webpack');

/**
 * step1:
 * npm install --save-dev webpack babel-core babel-preset-es2015 babel-loader
 * step2:
 * npm install --save jquery babel-polyfill
 * step3:
 * webpack
 */

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}
