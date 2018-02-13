'use strict';
require('./shared-services.js');

var config = require('../configs/controller-config.json');

console.log("Read configuration: ~/configs/controller-config.json")
console.log(beautify(config));

config.modules.forEach( module => {
  console.log("Module:" + module.name);
  console.log(beautify(module));
});
