const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container
module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "[name].[contenthash].js",
        path : path.resolve(__dirname,"build"),
        publicPath : "auto"
    },
    devServer : {
        port : 5050,
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx|ts|tsx)/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader",
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name : "remoteB",
            filename : "remoteBremoteEntry.js",
            exposes : {
                "./remoteBapp" : "./src/bootstrap",
            },
            shared : {
                "react" : {singleton : true},
                "react-dom" : {singleton : true},
            }
        })
    ]
}