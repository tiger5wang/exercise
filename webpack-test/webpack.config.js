// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//     context: path.resolve(__dirname, './src'),
//     entry: {
//         app: './index.js'
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'bundle2.js'
//     },
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin()
//     ]
// }


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}

























