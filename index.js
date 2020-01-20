const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuario = {
 nombre:'',
 apellido: ''
};


app.get('/usuario',function(req,res){
res.send(usuario);
} );
app.post('/', function(req, res) {
    usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido
       };
       res.send("Usuario creado");
   });
//app.get('/:id', );


   app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });
