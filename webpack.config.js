//entry point  and what the output he looking for
const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

//process.env.NODE_ENV -  enviroment varible that store the current eiviroment we use:
//1. proddection
//2. development
//3. testing
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'});
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'});
}

//configuration details 
module.exports = (env) => {
    const isPrudaction = env === 'production';
    const CSSExtract = new extractTextPlugin('styles.css'); // the name of the file

    return  {  
        entry : ['babel-polyfill','./src/app.js'], //entry point
        output:{
            path: path.join(__dirname,'public','dist'),
            filename:'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader', // make as to use babel that make us to use jsx and compile to js
                test: /\.js$/,//we looking for files that ent with js
                exclude: /node_modules/
            }, {
                test: /\.s?css$/, //we looking for fiels that end with css
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
              })
        ],
        devtool: isPrudaction ? 'source-map' : 'inline-source-map',//road map to our code when we have error
        devServer:{
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true, //this tell to the dev server that we handle routing in the client side
            publicPath:'/dist/'
        }
    };
}
