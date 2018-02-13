'use strict';
require('./shared-services.js');

var modules = require('../configs/controller-config.json');

console.log("Read configuration: ~/configs/controller-config.json")
console.log(beautify(modules));
