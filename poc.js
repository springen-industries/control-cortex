'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();

// i2cFace.scan(0x0, 0x7F);
//
//i2cFace.listAddresses();

while(true) {
  var output =  i2cFace.readModuleState(26,4);
  i2cFace.writeToRadio(8,output);

}


// takes in a value from the i2c-gimbal module and converts it to PPM between 1000 and 2000 ms
function byteToPPM(byte) {

}
