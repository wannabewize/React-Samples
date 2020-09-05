const webpack = require('webpack');

module.exports = {
    mode: 'development', // 'production'
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                include: __dirname + '/src', // absolute path 필요
                use: {
                    loader: 'babel-loader',
                    options: {                        
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}