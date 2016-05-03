var bSync = require('browser-sync-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  },
  plugins: [
    new bSync(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080'
      },
      {
        reload: true
      }
    )
  ]
};
