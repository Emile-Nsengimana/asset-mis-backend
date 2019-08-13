const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
 devServer: {
   historyApiFallback: {
     disableDotRule: true
   },
   overlay: true,
 },
 entry: path.join(__dirname, "src", "index.js"),
 output: {
   path: path.join(__dirname, "build"),
   filename: "bundle.js",
   publicPath: "/"
 },
 module: {
   rules: [
     {
       test: /.(js|jsx)$/,
       exclude: /node_modules/,
       use: ["babel-loader"]
     },
     {
       test: /.(css|scss)$/,
       use: [
         MiniCssExtractPlugin.loader,
         {
           loader: 'css-loader',
           options: {
             modules: false
           }
         },
       ]
     },
     {
       test: /.(jpg|jpeg|png|gif|svg)$/,
       use: [
         {
           loader: "file-loader",
           options: {
             name: "[path][name]-[hash:8].[ext]"
           }
         }
       ]
     }
   ]
 },
 plugins: [
   new HtmlWebpackPlugin({
     filename: "index.html",
     template: path.join(__dirname, "public", "index.html")
   }),
   new MiniCssExtractPlugin({
     filename: "[name].css",
     chunkFilename: "[id].css"
   })
 ]
};
