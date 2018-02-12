'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();


while(true) {
  var output =  igit 2cFace.readModuleState(26,4);
  i2cFace.writeToRadio(8,output);
}
