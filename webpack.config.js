const path = require('path')

// 需要加载VueLoaderPlugin 否则会报错
// vue - loader was used without the corresponding plugin.Make sure to include VueLoaderPlugin in your webpack config.
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 用来生成html
const HTMLPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

const ExtractPlugin = require('extract-text-webpack-plugin')

// 根据打包时的参数判断是否是开发环境
const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: "web",
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // }, 
      {
        test: /\.(gif|jpg|jpeg|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-aaa.[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 用来在生成的html里添加环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
}

if (isDev) {
  config.module.rules.push({
    test: /\.styl(us)?$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader' // 预处理css
    ]
  })

  // 添加dev-server的配置
  config.devServer = {
    port: 8000,
    host: '0.0.0.0', // 同时兼容localhost及内网ip
    overlay: {
      errors: true // 在页面上直接显示错误
    },
    open: true,
    hot: true
  }

  config.devtool = '#cheap-module-eval-source-map'

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl(us)?$/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader' // 预处理css
      ]
    })
  })

  config.plugins.push(
    new ExtractPlugin('style.[chunkhash:8].css')
  )
}

module.exports = config