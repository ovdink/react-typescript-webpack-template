const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash].js', // Define the 'js' subfolder for the main files
        chunkFilename: 'js/[name].[contenthash].chunk.js', // Define the 'js' subfolder for the chunks
    },
    plugins: [new CleanWebpackPlugin()],
    // https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: ['imagemin-pngquant'],
                    },
                },
                generator: [
                    {
                        // You can apply generator using `?as=webp`, you can use any name and provide more options
                        preset: 'webp',
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            // Please specify only one plugin here, multiple plugins will not work
                            plugins: ['imagemin-webp'],
                        },
                    },
                ],
            }),
        ],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageNameMatch = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                        );
                        const packageName = packageNameMatch ? packageNameMatch[1] : '';

                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
        removeAvailableModules: true,
    },
});
