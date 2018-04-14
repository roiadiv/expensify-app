//entry point  and what the output he looking for
const path = require('path');
//configuration details 
module.exports = {
    entry : './src/app.js', //entry point
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', // make as to use babel that make us to use jsx and compile to js
            test: /\.js$/,//we looking for files that ent with js
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, //we looking for fiels that end with css
            use: [ //array of loaders
                'style-loader', //inject
                'css-loader', //read
                'sass-loader'//use node-sass to convart the scss to css
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',//road map to our code when we have error
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true, //this tell to the dev server that we handle routing in the client side
    }
};