/* eslint-disable prettier/prettier */
module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/colors.scss";`,
      },
    },
  },
};
