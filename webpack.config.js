const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports= {
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
}