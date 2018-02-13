
global.beautify = object => {
  return JSON.stringify(object,null, 2)
}

global.moduleFactory = require('./module-factory.js');
