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
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}