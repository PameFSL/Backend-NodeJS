// node main.js

//Se crea objeto logger el cual contiene las propiedades establecidas en el archivo logger.js
const logger = require('./logger')


// se accede a las funciones de logger
logger.info('This is an informational message')
logger.verbose('This is a verbose message')