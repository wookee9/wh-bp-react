var webpack = require('webpack')
// grab dependencies from package.json, and create entries for each
var pj = require('./package.json')
var libsArr = [];
for (var k in pj.dependencies){
  libsArr.push(k);
}

module.exports = {
  entry: {
    'vendor': libsArr
  },
  output: {
    filename: '[name].bundle.js',
    path: 'app/dist/',
    library: '[name]_lib'
  },
  plugins: [
    new webpack.DllPlugin({
      path: '[name].dll.manifest.json',
      name: '[name]_lib'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false,
      compress: {
        warnings: false
      }
    })
  ],
}
