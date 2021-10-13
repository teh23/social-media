const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const config = {
  mode: isDevelopment ? 'development' : 'production',

  entry: ['@babel/polyfill', './client/src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './client/public/index.html',
      filename: './index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
module.exports = config;
