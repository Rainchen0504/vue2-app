const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 10000,
    headers: {
      //qiankun内部使用fetch请求资源，子应用必须跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      //打包路径
      library: "vue2App",
      libraryTarget: "umd",
    },
  },
});
