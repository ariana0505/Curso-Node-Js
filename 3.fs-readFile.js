//sync -> sincrono -> una taea a la vez
//asincrono-> muchas tareas a la vez
const fs = require('node:fs')
console.log('-> Leyendo el primer archivo....')
//ubicacion , lenguaje
fs.readFile('./archivo.txt', 'utf-8',(error , text) =>{ //Ejecuta este callback
    console.log(text);
})

console.log("-->Ejecutando Otra Tarea");

console.log('-> Leyendo el segundo archivo')
fs.readFile('./archivo2.text','utf-8',(error , text) =>{
    console.log(text);
})