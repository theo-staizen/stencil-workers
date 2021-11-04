const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        "src/index.html",
      ]
    }),
  ],
  output: {
    clean: true
  }
}
