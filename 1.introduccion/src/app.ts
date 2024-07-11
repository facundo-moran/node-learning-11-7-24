import { findHeroByID } from "./services/hero.service";

/*
LOGGER ADAPTER USAGE
*/
const { buildLogger } = require('./plugins');


// const logger = buildLogger('app.ts');

// logger.info("info message from logger adapter!");
// logger.debug("debug message from logger adapter!");
// logger.warn("warn message from logger adapter!");
// logger.error("error message from logger adapter!");


console.log({ hero: findHeroByID(1) });

