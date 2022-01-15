const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./index.js",
    output: {
        filename: 'bundle.js'
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}