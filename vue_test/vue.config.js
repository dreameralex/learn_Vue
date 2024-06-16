module.exports = {
  pages:{
    index: {
      entry: 'src/main.js'
    },
  },

  lintOnSave:false,//关闭语法检查
  // 开启代理服务器（方式1）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器（方式2）
  devServer: {
    proxy: {
      '/api':{
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''}
      // ws: true,//Websocket
      // changeOrigin: true
      },
      '/demo':{
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''}
      // ws: true,//Websocket
      // changeOrigin: true
      }
    }
  }
}
