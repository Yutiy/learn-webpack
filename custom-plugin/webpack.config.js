const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyrightWebpackPlugin({
      filename: 'copyright'
    }),
  ],
};
