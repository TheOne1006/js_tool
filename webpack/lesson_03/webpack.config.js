var CommonsChunkPlugin = require("../../node_modules/webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        m1: './src/app.js',
        angular: ['./vendor/angular', './vendor/angular-ui-router']
    },
    output: {
        path: "build",
        filename: '[name].js?[chunkhash]',
    },
    plugins: [
        new CommonsChunkPlugin('angular', 'angular.bundle.js')
    ]
};
