const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const commonConfig = require('./webpack.common');

const APP_PORT = 3000;

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'webpack/hot/only-dev-server',
        `webpack-dev-server/client?http://localhost:${APP_PORT}`,
        './src/index.tsx',
    ],
    output: {
        publicPath: '/',
    },
    devServer: {
        hot: true,
        // if you need to test on a local network on a mobile phone, then do 'true' and use https://ip:port
        https: false,
        port: APP_PORT,
        open: false,
        historyApiFallback: true,
        devMiddleware: {
            // https://webpack.js.org/configuration/experiments/#experimentslazycompilation
            // lazy: false,
            // stats: 'minimal',
            stats: { children: true },
            // index: false,
        },
        client: {
            logging: 'info',
            overlay: {
                errors: true,
                warnings: true,
            },
        },
    },
    devtool: 'source-map',
    plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
});
