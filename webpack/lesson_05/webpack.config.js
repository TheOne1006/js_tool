var webpack = require('webpack');
var path = require('path');

module.exports = {
    port: 8090,
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:8090',
      'webpack/hot/only-dev-server',
      './src/app'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js',
        port: 8090,
        publicPath: '/build/'
    },
    devServer: {
      contentBase: './',
      historyApiFallback: true,
      hot: true,
      noInfo: false,
      colors: true,
      publicPath: '/build/'
    },
    // 开启 loaders debug 模式
    debug: true,
    cache: true,
    devtool: 'eval-source-map',
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
        new webpack.HotModuleReplacementPlugin(), // 本地开发热加载
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
    ]
};
