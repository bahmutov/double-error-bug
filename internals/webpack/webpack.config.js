const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.css', '.d.ts'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.global.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                compileType: 'module',
                mode: 'local',
                auto: true,
                exportGlobals: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.join(__dirname, '../../postcss.config.js'),
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|webp)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    // @NOTE: atm use of the next/link component seems to want to 
    // touch the global process var. So use webpack to provide this.
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
