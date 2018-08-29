module.exports = {
  runtimeCompiler: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8080,
    host: 'localhost',
    https: true,
    open: true
  },
  pwa: {
    name: 'Atomica'
  }
}