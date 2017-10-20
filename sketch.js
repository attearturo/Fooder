const express = require('express');
var app = express();
var data;

function preload(){
	data = loadJSON('movies.json');
}

function setup(){
	noCanvas();
	console.log(data);
}

app.listen(3001, function () {
  console.log('Escuchando en el puerto 3001')
});