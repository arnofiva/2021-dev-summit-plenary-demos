const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const entries = ["index"];

module.exports = {
  entry: entries.reduce(
    (acc, entry) => {
      return { ...acc, [entry]: [`./src/${entry}/style.css`, `./src/${entry}/main.ts`] };
    }, {}
  ),
  node: false,
  output: {
    libraryTarget: "amd",
    path: path.join(__dirname, "dist"),
    filename: "[name]/main.[chunkhash].js",
    // chunkFilename: 'chunks/[id].js',
    publicPath: ''
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
  },
  externals: [
    /^esri\/.*/,
    /^app\/.*/
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!.git/**',]
    }),
    ...entries.map(entry => new HtmlWebpackPlugin({
      title: '3D Limmern Hydro Power Plant',
      description: 'Esri Developer Summit 2021 Plenary Demo for the ArcGIS API for JavaScript',
      template: `./src/layout.js`,
      filename: `${entry}.html`,
      entry,
      chunks: [entry],
      chunksSortMode: 'none',
      inject: false,
    })),
    new MiniCssExtractPlugin({
      filename: "[name]/style.[chunkhash].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin(
      {
        patterns: [{
          from: './public',
          to: './'
        }]
      })
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, "/src"),
      path.resolve(__dirname, "node_modules/")
    ],
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  }
};
