const express = require('express');
const bodyParse = require('body-parser');
const app = express();

const api = require('./api.js');

app.use(bodyParse.urlencoded({
    extended:true
}));
app.use(bodyParse.json());

app.use('/', function(req, res){
    res.send('funcionando')
});

app.listen(3000);