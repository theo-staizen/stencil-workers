const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        "src/index.html"
      ]
    }),
  ],
  output: {
    clean: true,
  }
}
