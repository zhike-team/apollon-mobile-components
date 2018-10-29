const path = require("path")
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve("awesome-typescript-loader"),
      options: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }, {
      loader: require.resolve("react-docgen-typescript-loader")
    }],
    exclude: [/\.js$/, /\.html$/, /\.json$/,/\.scss$/]
  },
  { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']})
  config.plugins.push(new TSDocgenPlugin(), new CopyWebpackPlugin([
  ])) // optional
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
