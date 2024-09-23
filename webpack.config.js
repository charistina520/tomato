const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',  // 入口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // 输出目录
    clean: true,  // 清理输出目录
  },
  mode: 'production', // 设定为生产模式
  module: {
    rules: [
      {
        test: /\.css$/i,  // 处理 CSS 文件
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // 处理图片
        type: 'asset/resource',
      },
      {
        test: /\.js$/i,  // 处理 JavaScript 文件
        exclude: /node_modules/,  // 排除 node_modules 目录
        use: {
          loader: 'babel-loader',  // 使用 Babel 转换 JavaScript
          options: {
            presets: ['@babel/preset-env'],  // 使用环境预设
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // 使用的 HTML 模板
      minify: {
        removeComments: true,  // 移除注释
        collapseWhitespace: true,  // 压缩空白
      },
    }),
  ],
};