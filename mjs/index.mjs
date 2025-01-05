// .js -> por defecto utilizar CommonJs
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

// Sistema de módulos: CommonJS define cómo se exportan e importan módulos en JavaScript utilizando las palabras clave require y module.exports.

// Sincrónico: Las dependencias se cargan de manera sincrónica, lo que significa que es ideal para entornos donde no se necesita cargar código de manera asíncrona (como en el servidor).

// Uso en Node.js: Node.js utiliza CommonJS como su sistema de módulos principal (aunque también admite ES Modules desde Node.js 12+).

import {sum} from './sum.mjs'
console.log(sum(2,6))