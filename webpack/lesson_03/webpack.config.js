/**
 * loader
 */
module.exports = {
    entry: {
        m1: './src/app.js',
        angular: ['./vendor/angular', './vendor/angular-ui-router']
    },
    output: {
        path: "build",
        filename: '[name].js?[chunkhash]',
    },
    module: {
      loaders: [
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 versions"]}!sass-loader?outputStyle=expanded'
        }
      ]
    }
};
