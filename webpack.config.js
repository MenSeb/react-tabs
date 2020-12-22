const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /.(js|jsx)$/,
                use: ['babel-loader'],
            },
            {
                exclude: /node_modules/,
                test: /.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
};
