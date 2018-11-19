const path = require('path');
var glob = require("glob");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// module: {
//   rules: [
//     {
//       test: /\.vue$/,
//       loader: 'vue-loader'
//     },

//   ],
//   plugins: [
//     new VueLoaderPlugin()
//   ],
// }

// module.exports = {
  
// };

module.exports = {
  entry: glob.sync('./www/js/*.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'www/dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // enable CSS Modules
              modules: true,
              // customize generated class names
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}