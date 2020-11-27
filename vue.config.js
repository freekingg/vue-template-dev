
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  assetsDir: 'static',
  outputDir: 'dist',
  publicPath: './',
  devServer: {},
  // node_modules依赖项es6语法未转换问题
  transpileDependencies: ['vuex-persist'],
  // 关闭生产环境console
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}
