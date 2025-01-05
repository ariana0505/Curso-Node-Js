const fs = require('node:js/promises')
fs.readdir('.')
    .then(files=>{
        files.forEach(file => {
            console.log(file)
        })   
    })
    .catch(err => {
        if (err){
            console.error('Error al leer el directorio: ' , err)
        }
    })
