module.exports = {
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$|\.es6$|\.babel$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ],
                    plugins: [
                        "transform-runtime"
                    ]
                }
            }
        ]
    }
};