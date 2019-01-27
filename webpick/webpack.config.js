const path = require('path');
// 热模块替换的插件  HMR  在webpack中内置了
const webpack = require('webpack')
// 在webpack的配置中, 装插件的方式都一样
// 在plugins节点下创建插件对象  {}  new Object()   []  new Array()  /\d/  new RegExp()
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/main.js',
  entry: path.join(__dirname,'./src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    // compress: true,
    hot:true,
    open:true,
    port: 3045//设置devServer的端口号
  },
  plugins: [
    // 装了插件表示当前项目有资格开启HMR
    new webpack.HotModuleReplacementPlugin(),
    // 安装插件
    // 如果不传入任何配置选项, 默认也会创建一个index.html托管在服务器根路径
    // 只不过这个HTML是空的, title默认是webpack app
    // new HtmlWebpackPlugin({
    //   // title: '传智大法好!!!', // 如果模板中有title, 会覆盖这里的配置
    //   template: './src/index.html'
    // })
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader',"less-loader" ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192// 字节 Byte 如果在8192个字节(8KB)内  就使用base64编码
            }
          }
        ]
      },
      {

        test: /.(eot|svg|ttf|woff|woff2)$/,

        use: [

          {

            loader: 'url-loader'

          }

        ]

      }

    ]
  },
  mode:"development"
};
