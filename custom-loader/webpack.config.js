const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  watch: true,
  module: {
    rules: [
      {
        test: /.js/,
        use: [
          {
            loader: 'banner-loader',
            options: {
              text: 'yd',
              filename: path.resolve(__dirname, './src/banner.js'),
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024
          }
        }
      }
    ]
  }
};
