const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyPlugin = require("copy-webpack-plugin");

module.exports = {

    entry: {
        "bundle":"./src/js/index.js",
    },
    output:{
        filename : "bundle.js",
        path: path.resolve(__dirname,"./dist"),
        clean:true,
    },
 
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 3000,
        hot:true,
        liveReload:true
    },
    module:{
            rules:[
                {
                    test:/\.scss$/,
                    use: [
                         miniCssExtractPlugin.loader, 
                         {
                            loader: "css-loader",
                            options: {
                                url: false,
                            }
                         }, 
                         "sass-loader"
                    ]
                }
            ]
        },
    plugins:[
        new miniCssExtractPlugin({
            filename:"style.css"
        }),
        new copyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, "./src/index.html"), 
                    to: path.resolve(__dirname, "./dist/index.html")
                },
                {
                    from: path.resolve(__dirname, "./src/img"), 
                    to: path.resolve(__dirname, "./dist/img"),
                },
                {
                    from: path.resolve(__dirname, "./src/Gotham-Font"), 
                    to: path.resolve(__dirname, "./dist/Gotham-Font"),
                },
                {
                    from: path.resolve(__dirname, "./src/fonts"), 
                    to: path.resolve(__dirname, "./dist/fonts"),
                },
            ],
        }),
    ]
}