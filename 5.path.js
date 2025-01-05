const path = require('node:path')
//barra sepadora de carpetas segun SO
console.log(path.sep)

//unir rutas con path join
const filePath = path.join('contenedor' ,'subfolder', 'test.txt')
console.log(filePath)

//obtener el archivo
const base = path.basename('/tmp/midu/password.txt')
console.log(base)

//obtener el nombre el archivo
const fileName = path.basename('/tmp/midu/password.txt', '.txt')
console.log(fileName)

//obtener la extencion del archivo
const extencion = path.extname('hola.como.estas.img')
console.log(extencion)