//asincrono-> muchas tareas a la vez
const fs = require('node:fs/promises')
console.log('-> Leyendo el primer archivo....')
//ubicacion , lenguaje
fs.readFile('./archivo.txt', 'utf-8')
.then(text =>{
    console.log('Primer text:' + text)
})

console.log("-->Ejecutando Otra Tarea");

console.log('-> Leyendo el segundo archivo')
fs.readFile('./archivo2.text','utf-8')
.then(text =>{
    console.log('Segundo text:' + text)
})