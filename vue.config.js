const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/main.scss";`,
      },
    },
  },
  devServer: {
    // proxy: {
    //   '^/swQ1ic': {
    //     target: 'https://api.jsonserve.com/',
    //     ws: true,
    //     changeOrigin: true
    //   },
    // }
    proxy: 'https://api.jsonserve.com/'
  }
});
