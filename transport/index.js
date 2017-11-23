//importar modulo express
const express = require('express');

//crear constante app
const app = express();

//modulo path que viene por defecto en node
const path = require('path');

//definimos el comportamiento del root
app.get('/',function(request, response){
       
    //enviar el archivo index.html
 response.sendFile(path.join(__dirname, 'index.html'));
});

//definimos las carpetas de archivos estáticos
app.use('/js',express.static('js'));
app.use('/img', express.static('img'));
app.use('/css', express.static('css'));

//iniciamos el servidor en el puerto 3000
app.listen(3000, function(){
    console.log('Escuchando en el puerto 3000')
});