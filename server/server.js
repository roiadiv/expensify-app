//we gonna use Express(framwork), a tool that create this web sever that work with node
//expressjs.com - api 4 ref
const path = require('path');
const express = require('express');
const app = express();//make a express application
const publicPath = path.join(__dirname,'..', 'public');
const port = process.env.PORT || 3000;//if the heruko dont provide us an port we use a defulte - 3000 localhost


//We now need to do 2 things:
//1. tell the server where the our files live
//2. what port he nned to listen

app.use(express.static(publicPath));

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port,()=>{
    console.log('Server is up!')
})