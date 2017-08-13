module.exports = {
    entry: ['babel-polyfill', './App/js/index.js'],
 
 
    output :{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './build', //our build folder
        inline: true //allows us to run automatic live code updating
 
    }
     
}