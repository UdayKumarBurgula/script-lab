const path = require('path');
module.exports = {
  entry: './index.ts',
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/webpack'),
  },
};
