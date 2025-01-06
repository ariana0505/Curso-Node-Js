const fs = require('node:fs')
fs.readdir('.', (err,files)=>{
    //si err existe
    if(err){
        console.error('Error al leer el directorio: ',err)
    }

    files.forEach(file => {
        console.log(file)        
    });
})
 