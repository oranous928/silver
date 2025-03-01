const express = require('express');
const server = express();
server.get('/',(req,res)=>root(req,res));
server.listen(5567,'0.0.0.0');
function root(req,res){
    res.send('Wlcome to paradise');
}