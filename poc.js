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
  sleep.msleep(20);
}
