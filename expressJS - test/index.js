const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,function(){
    console.log('3333');
})

