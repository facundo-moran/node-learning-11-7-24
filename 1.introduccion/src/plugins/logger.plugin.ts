const winston = require('winston');
const { combine, timestamp, json } = winston.format


const logger = winston.createLogger({
  level: 'silly',
  /*
    En el formato de salida de todos los logs
    combiname el formato json "{ clave: valor }"
    junto con timestamp
  */
  format: combine(
    timestamp(), 
    json()
  ),
//   defaultMeta: { service: 'app.js' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

/*
    EXPORT LOGGER FACTORY
*/
module.exports = function buildLogger(service='') {
    /*
        WINSTON LEVELS
            error, warn, help, data ,info, debug, prompt, verbose, input, silly
    */

    return {
        info: (message: string) => {
            logger.info(message, { service })
        },
        debug: (message: string) => {
            logger.debug(message, { service })
        },
        warn: (message: string) => {
            logger.warn(message, { service })
        },
        error: (message: string) => {
            logger.error(message, { service })
        }
    };
}