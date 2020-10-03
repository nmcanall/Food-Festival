const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./assets/js/script.js",
        event: "./assets/js/event.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            // This will output report.html in the dist folder
            analyzerMode: "static"
        })
    ],
    mode: "development"
};