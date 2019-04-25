const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  module: {
    rules: [
      {test: /\.js$/,use:'babel-loader',exclude:/node_modules/},
      {test: /\.s(a|c)ss$/,use: ['style-loader','css-loader?modules','sass-loader']},
      // 可以在css-loader后追加modules启用模块化
      {test: /\.css$/,use: ['style-loader','css-loader'],},
      {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html'),//指定模板页面,
        filename:'index.html',//指定生成页面的名称
    })
  ],
  resolve:{
    extensions:['.js','jsx','json'],
    alias:{
      '@':path.join(__dirname,'./src')
    }
  }
}