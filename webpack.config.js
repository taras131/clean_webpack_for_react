const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '.dist',
        resolve: {
            extensions: ['.jsx', '.js']
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|giv|jpef)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                type: 'asset/resource'
            }
        ]
    }
}