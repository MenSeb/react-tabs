const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(config, {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
});
