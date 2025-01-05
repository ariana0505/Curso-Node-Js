//se trata como un CommonJS Module por defecto en Node.js, lo que no permite usar await fuera de una función async.
import { readFile } from 'node:fs/promises';
import { text } from 'node:stream/consumers';

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.text','utf-8')
]).then(([text,text2]) =>{
    console.log('Primer text:' + text)
    console.log('Segundo text:' + text2);
})
