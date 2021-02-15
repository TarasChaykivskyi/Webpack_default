const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const source_directory = 'src';
const project_directory = 'dist';

const filename = ext => isDev ? `${ext}/[name].bundle.${ext}` : `${ext}[name].bundle.[hash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, source_directory),
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, project_directory),
        filename: filename('js')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, source_directory, "img"),
                    to: path.resolve(__dirname, project_directory, "img"),
                },
                {
                    from: path.resolve(__dirname, source_directory, "fonts"),
                    to: path.resolve(__dirname, project_directory, "fonts"),
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
};
