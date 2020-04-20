let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let package = require('./package.json');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    // entry: {
    //     app: './src/app.js',
    //     vendor: [...Object.keys(package.devDependencies), ...(Object.keys(package.dependencies))],
    // },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].bundle.js',
    //     chunkFilename: '[name].[chunkhash].bundle.js',
    //     publicPath: '/',
    // },

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, '../dist/'),
        port: 7000
    },

    watch: true
}