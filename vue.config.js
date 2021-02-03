module.exports = {
  publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
  //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
  outputDir: 'dist', //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
      port: 9020, // 端口
      open: false, // 启动后打开浏览器
      overlay: {
          //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
          warnings: false,
          errors: true
      },
      proxy: {
        //配置跨域
        '/api': {
            target: "http://121.5.140.96:8181",
          //   ws:true,
            changOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        }
      }
  },
}