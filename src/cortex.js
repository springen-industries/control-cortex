'use strict';
require('./shared-services.js');

var config = require('../configs/controller-config.json');
console.log("Read configuration: ~/configs/controller-config.json and found " + config.modules.length + " modules")
//console.log(beautify(config));

config.modules.forEach( mod => {
  moduleFactory.loadModule(mod, (res,err) => {console.log("done")});
});
