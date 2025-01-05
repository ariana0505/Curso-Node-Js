const { Console } = require("console");

//argumentos de entrada
console.log(process.argv);
//EN LA TERMINAL -> node .\7.process.js -> 
// 'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\casa\\Desktop\\Curso-Node-Js\\7.process.js'

//controlar el proceso y su salida
//0 -> todo correcto
//1 -> hubo un error y se quiere que se retire

//process.exit()


//liberar recursos o registrar mensajes en la consola 
//antes de que el programa termine.
process.on('exit', () => {
    console.log("El programa esta apunto de terminar...")
}) 

//current working directory
console.log("EL DIRECTORIO ES: ",process.cwd())

//platform
//Tiene que ser un string
console.log(process.env.NOMBRE);
//TERMINAL -> $env:NOMBRE="ariana"; node .\7.process.js
