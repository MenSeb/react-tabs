const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /.s[ac]ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        alias: { ['~']: path.resolve(__dirname, 'src') },
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
};
