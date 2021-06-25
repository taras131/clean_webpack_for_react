const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin  = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill','./index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '.dist',
        open: true,
        resolve: {
            extensions: ['.jsx', '.js']
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),

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
            },
            {
                test: /\.(png|svg|giv|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader']
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
}