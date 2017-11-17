'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();

// i2cFace.scan(0x0, 0x7F);
//
//i2cFace.listAddresses();

while(true) {
  var output =  i2cFace.readModuleState(26,4);
  i2cFace.writeToRadio(8,byteToPPM((output);

}


// Takes readings from i2c-gimbal and shifts them to 0-255 for easier conversion to PPM
function normalizeBytes(byte) {
  return byte;
}
