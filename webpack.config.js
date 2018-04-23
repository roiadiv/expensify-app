//entry point  and what the output he looking for
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

//configuration details 
module.exports = (env) => {
    const isPrudaction = env === 'production';
    const CSSExtract = new extractTextPlugin('styles.css'); // the name of the file

    return  {  
        entry : './src/app.js', //entry point
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
            CSSExtract
        ],
        devtool: isPrudaction ? 'source-map' : 'inline-source-map',//road map to our code when we have error
        devServer:{
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true, //this tell to the dev server that we handle routing in the client side
            publicPath:'/dist/'
        }
    };
}
