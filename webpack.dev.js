const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(config, {
    devServer: {
        contentBase: path.resolve(__dirname, 'demo'),
    },
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'demo/index.js'),
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'demo'),
    },
});
