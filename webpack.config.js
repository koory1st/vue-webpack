const path = require('path')

// 需要加载VueLoaderPlugin 否则会报错
// vue - loader was used without the corresponding plugin.Make sure to include VueLoaderPlugin in your webpack config.
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader' // 预处理css
      ]
    }, {
      test: /\.(gif|jpg|jpeg|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}