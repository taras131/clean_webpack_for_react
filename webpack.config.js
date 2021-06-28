const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js",
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 9000,

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to: path.resolve(__dirname, 'dist/images')
                }
            ]
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
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(png|svg|giv|jpg|jpeg|gif)$/,
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