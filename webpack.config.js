const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./app/index.js",

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-iniline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test:/\.(js)$/,
        use:"babel-loader"
      }
    ],
  },
  output: {
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()], //its going to generat what is the filename and path it will take its and inject in index.html
  mode:process.env.NODE_ENV === "production" ? "production" : "development"

};
