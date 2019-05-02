/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const dev = (process.env.NODE_ENV !== 'production')

const cssLoaders = [
  'css-loader?modules&localIdentName=[path]_[local]__[hash:base64:5]',
  'postcss-loader',
  'sass-loader',
]

function getEntrySources() {
  const entries = []

  if (dev) {
    entries.push('babel-polyfill')
    entries.push('react-hot-loader/patch')
    entries.push('webpack/hot/only-dev-server')
    entries.push('./examples')
  } else {
    entries.push('./examples')
  }

  return entries
}

function getPlugins(plugins) {
  plugins.push(new HtmlWebpackPlugin({
    template: 'examples/index.html',
    inject: true,
    hash: true,
  }))

  plugins.push(new webpack.NamedModulesPlugin())

  if (!dev) {
    plugins.push(new ExtractTextPlugin('kriya.css'))
  }

  return plugins
}

module.exports = {
  devtool: dev ? 'eval' : '',
  entry: { kriya: getEntrySources() },
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
    publicPath: dev ? '/' : '/kriya/',
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('./src'),
      path.resolve('./examples'),
    ],
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: getPlugins([]),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'examples'),
        ],
        use: ['babel-loader'],
      },
      {
        test: /global\.scss$/,
        include: [
          path.resolve(__dirname, 'examples'),
        ],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'examples'),
        ],
        exclude: [/global\.scss/],
        use: dev ? ['style-loader', ...cssLoaders] : ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: cssLoaders,
        }),
      },
      {
        test: [/(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?/],
        exclude: [/^\.\.\/\.\.\/resources\/drawings\//],
        use: ['file-loader'],
      },
    ],
  },
}
