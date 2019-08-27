const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js']
    }
};