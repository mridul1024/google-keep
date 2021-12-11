const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Component } = require("react");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
            "@containers": path.resolve(__dirname, "./src/containers")
        }
    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}