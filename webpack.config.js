const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  plugins: [new UnminifiedWebpackPlugin()],
}
