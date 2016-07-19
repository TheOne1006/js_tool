const webpack = require('webpack');

module.exports = {
    entry: {
        m1: './src/app.js'
    },
    output: {
        path: "build",
        filename: '[name].js?[chunkhash]',
    },
    // 开启 loaders debug 模式
    debug: true,
    cache: false,
    devtool: 'sourcemap',
    stats: {
      colors: true,
      reason: true
    },
    module: {
      loaders: [
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 versions"]}!sass-loader?outputStyle=expanded'
        }
      ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
    ]
};
