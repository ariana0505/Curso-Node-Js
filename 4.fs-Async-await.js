//El async 
//EL AWAIT SOLO ES VALIDO EN FUNCIONES ASINCRONAS
const {readFile} = require('node:fs/promises');

//FUNCION INVOCADA
(
    async()=>{
    console.log('-> Leyendo el primer archivo....')
    //ubicacion , lenguaje
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('Primer text:' + text)

    console.log("-->Ejecutando Otra Tarea");

    console.log('-> Leyendo el segundo archivo');
    const text2 = await readFile('./archivo2.text','utf-8');
    console.log('Segundo text:' + text2);
})()
