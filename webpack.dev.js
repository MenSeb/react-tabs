const config = require('./webpack.config.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(config, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'demo'),
    },
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'demo/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'demo'),
    },
});
