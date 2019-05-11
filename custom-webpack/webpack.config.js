const path = require('path');
const TestPlugin = require('./plugins/test-plugin.js');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test : /\.less?$/,
        use: [
          path.resolve(__dirname, 'loader', 'style-loader.js'),
          path.resolve(__dirname, 'loader', 'less-loader.js'),
        ]
      }
    ]
  },
  plugins: [
    new TestPlugin(),
  ]
};
