var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var envFile = require('node-env-file');

var debug = process.env.NODE_ENV !== "production";

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e){
  console.log('error loading env file', e);
}

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: debug ? 'inline-sourcemap' : 'source-map',
  entry: {
    app: './src/js/index.jsx'
  },
  module: {
    loaders: [
      {
        //test: /\.jsx?$/,
        test: /\.(js|jsx)$/,
        exclude: [
          /(node_modules|bower_components)/,
          path.resolve(__dirname, 'firebase.json')
        ],
        include: [
          __dirname
        ],
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        //loaders: ["style", debug ? "raw" : "css", "sass", "postcss-loader"]
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /firebase.json|.firebaserc/,
        loader: 'ignore-loader'
      }
    ]
  },
  resolve: {
    root : __dirname,
    alias : {
      Stylesheets : 'app/src/css/styles.scss',
      Bootstrap : 'node_modules/bootstrap/scss',
      Container : 'app/src/js/containers/Container.jsx',
      Navigation : 'app/src/js/components/Navigation.jsx',
      Cover : 'app/src/js/components/Cover.jsx',
      PageA : 'app/src/js/components/PageA.jsx',
      PageB : 'app/src/js/components/PageB.jsx',
      PageC : 'app/src/js/components/PageC.jsx',
      Components : 'app/src/js/components',
      JS : 'app/src/js'
    }
  },
  output: {
    path: __dirname + "/app/dist/",
    publicPath: '/',
    filename: debug ? "[name].bundle.js" : "[name].bundle.min.js"
  },
  postcss: function () {
      return [
        autoprefixer
      ];
  },
  plugins: debug ? [
    // Development
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require('./vendor.dll.manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: 'body',
      title: 'React Boilerplate',
      minify: {
        html5 : true,
        preserveLineBreaks: false
      },
      hash: false
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve('./app/dist/vendor.bundle.js'),
      includeSourcemap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ] : [
    // Production
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET)
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: 'body',
      title: 'React Boilerplate',
      minify: {
        html5 : true,
        preserveLineBreaks: false
      },
      hash: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ comments: false, minimize: true, sourcemap: false,
      compress: {
        warnings: false
      }
    })
  ],
};
