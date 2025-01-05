//sync -> sincrono -> una taea a la vez
//asincrono-> muchas tareas a la vez

//ESTE PROGRAMA ES SINCRONO
const fs = require('node:fs')
console.log('-> Leyendo el primer archivo....')
//ubicacion , lenguaje
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text);

console.log("-->Ejecutando Otra Tarea");

console.log('-> Leyendo el segundo archivo...')
const text2 =fs.readFileSync('./archivo2.text','utf-8')
console.log(text2)