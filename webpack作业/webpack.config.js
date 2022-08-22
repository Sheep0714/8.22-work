const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// 修改webpack的默认设置
// 修改出口和入口
module.exports = {
  //webpack的自定义配置
  // entry:出口-相对路径
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pubIlc/index.html',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 8888, // 端口号不设置默认是8080
    open: true, //yarn serve后会自动打开浏览器页面
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset', //以8kb为界限,小于8kb会打包成文件,大于会转成base64
        generator: {
          filename: 'images/font-[name].[hash:6][ext]',
        },

        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          },
        },
      },
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/,
      //   type: 'asset/inline',//转成base64
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/font-[name].[hash:10][ext]',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
}
