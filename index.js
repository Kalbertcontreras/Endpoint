const express = require('express');
const fs = require('fs')

const app = express();

// devuelve cosas
app.get('/public/getQuotations',(req,res) => {
    res.json('datosinicial')
    console.log(datosinicial)
});
// recivir datos y guardarlos en base de datos y devuelve respuestas
app.post('/about', (req, res )=>{
    res.send('POST REQUEST RECEIVED');
});
// toma datos que estan en el front end para actualizarlos
app.put('/contact', (req, res )=>{
    res.send('UPDATE REQUEST RECEIVED');
});
// toma la peticion y la elimina
app.delete('/test', (req, res )=>{
    res.send('<h1>DELET REQUEST RECEIVED</h1>');
});

//servidor de node
app.listen(3000, () => {
    console.log('Server on port 3000')
})

let data=fs.readFileSync('./data/datos.json')
// console.log(data);
let datosinicial=JSON.parse(data);
console.log(datosinicial);