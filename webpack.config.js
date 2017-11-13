module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders:[ {
            test: /\.js$/,
            loader: ['babel-loader?presets[]=es2015,presets[]=stage-2,presets[]=react']
        }]
    }
}