'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();

// i2cFace.scan(0x0, 0x7F);
//
//i2cFace.listAddresses();

while(true) {
  var output = new Unit8Array( i2cFace.readModuleState(26,4) );
  console.log(output);
  sleep.msleep(40);
}
