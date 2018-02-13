'use strict';
require('./shared-services.js');

var config = require('../configs/controller-config.json');
console.log("Read configuration: ~/configs/controller-config.json and found " + config.modules.length + " modules")
//console.log(beautify(config));

function begin(){
  console.log("Starting main loop");
}

// this will launch an instance and callback for each module found.
// this should be wrapped in a wait() that blocks until each module reports sucess
// module factory should return a promise here and get passed all modules as a set
moduleFactory.loadModules(config.modules,begin);
