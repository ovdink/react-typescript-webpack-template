const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const getClientEnvironment = require('./env');

const isProd = process.env.NODE_ENV !== 'development';

const env = getClientEnvironment('/');

module.exports = {
    entry: path.join(process.env.PWD, 'src', 'index.tsx'),
    output: {
        publicPath: '/',
        path: path.join(process.env.PWD, 'build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(process.env.PWD, 'tsconfig.json'),
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[hash].[ext]',
                    outputPath: 'images',
                },
            },
            {
                test: /\.svg$/,
                issuer: {
                    and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
                },
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgo: false,
                            ref: true,
                        },
                    },
                    {
                        loader: 'url-loader',
                    },
                ],
            },

            // {
            //     test: /\.woff(2)?(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: '[hash].[ext]',
            //         mimeType: 'application/font-woff',
            //         outputPath: 'fonts',
            //     },
            // },
            {
                test: /\.(eot|ttf|otf|pptx)(\?.*)?$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.DefinePlugin(env.stringified),
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].build.css',
        }),
        new HtmlWebpackPlugin({
            template: path.join(process.env.PWD, 'public', 'index.html'),
            // favicon: path.join(process.env.PWD, 'public', 'favicon.png'),
            minify: {
                collapseWhitespace: isProd,
                removeComments: isProd,
                removeRedundantAttributes: isProd,
                removeScriptTypeAttributes: isProd,
                removeStyleLinkTypeAttributes: isProd,
                useShortDoctype: isProd,
            },
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(process.env.PWD, 'public', 'fonts'),
                    to: path.join(process.env.PWD, 'build', 'public', 'fonts'),
                },
                {
                    from: path.join(process.env.PWD, 'public', 'locales'),
                    to: path.join(process.env.PWD, 'build', 'public', 'locales'),
                },
                {
                    from: path.join(process.env.PWD, 'public', 'config'),
                    to: path.join(process.env.PWD, 'build', 'public', 'config'),
                },
                {
                    from: path.join(process.env.PWD, 'public', 'index.css'),
                    to: path.join(process.env.PWD, 'build', 'public'),
                },
            ],
        }),
    ],
};
