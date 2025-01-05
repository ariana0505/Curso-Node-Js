//El async 
//EL AWAIT SOLO ES VALIDO EN FUNCIONES ASINCRONAS

//se trata como un CommonJS Module por defecto en Node.js, lo que no permite usar await fuera de una función async.
const fs = require('node:fs/promises')
console.log('-> Leyendo el primer archivo....')
//ubicacion , lenguaje
const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('Primer text:' + text)

console.log("-->Ejecutando Otra Tarea");

console.log('-> Leyendo el segundo archivo')
const text2 = await fs.readFile('./archivo2.text','utf-8')
console.log('Segundo text:' + text2)