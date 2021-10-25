// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const conf = getConfig({
  modules:['index','home','articledetails']  //新增模块
});

const config = {
  entry:conf.entry,
  output: {
    filename: '[name]/[name].[chunkhash].js',
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
    hot:true,
    static: './docs',
  },
  plugins: [
    ...conf.html
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

function getConfig(props){
  let entry = {};
  let html = [];
  let modules = props.modules || [];
  modules.forEach(name=>{
    entry[name] = [`./src/${name}/${name}.js`, `./src/${name}/${name}.less`];
    html.push(new HtmlWebpackPlugin({
      template: `src/${name}/${name}.html`,
      filename: `${name}.html`,
      chunks: [`${name}`]
    }))
  })
  return {
    entry,
    html
  }
}

module.exports = async () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css'
    }));
  } else {
    config.mode = "development";
  }
  return config;
};
