const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [new CleanWebpackPlugin()],
    // https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
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
