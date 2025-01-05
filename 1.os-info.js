//En Node.js, os es un módulo integrado (core module) que proporciona una serie de funciones para interactuar con el sistema operativo. Permite acceder a información sobre el hardware, la arquitectura, el uso de recursos y otros datos relacionados con el entorno donde se ejecuta la aplicación.

const { console } = require('node:inspector')
const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema operativo', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('CPUs', os.cpus());
console.log('uptime:',os.uptime() /60/60) //devuelve en segundos divide entre 60 y 60 para obtener horas