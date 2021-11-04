const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        "src/index.html",
        // UNCOMMENT BELOW FOR WORKAROUND AND RESTART/REBUILD
        // {
        //   from: "node_modules/stencil-workers/dist/cjs/*.worker*.js",
        //   flatten: true
        // }
      ]
    })
  ]
}
