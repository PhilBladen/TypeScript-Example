const path = require('path');

module.exports = {
    mode: "production",
    // devtool: "inline-source-map",
    entry: "./src/main.ts",
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, "dist"),
        open: true
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }],
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
};