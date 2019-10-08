const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    mode:'development',
    devtool: 'inline-source-map',
    entry:{
        main:'./src/script/main.js',
        app:'./src/script/app.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'script/[name].js'

    },
    module:{
        rules:[
            {
                include: path.resolve(__dirname, 'src'),
                test:/\.js$/,
                use:[{loader:'babel-loader'}],
                exclude:path.resolve(__dirname,'node_modules'),
            },
            {
                include: path.resolve(__dirname, 'src'),
                test:/\.css$/,
                use:[{loader:'css-loader'}],
                exclude:path.resolve(__dirname,'node_modules'),
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'html',
            template:'src/views/main.html',
            filename:'views/main.html',
            inject:'body',
            chunks:['main']
        })
    ]

};


