'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();

var deadband_minimum = 250;
var deadband_maximum = 10;

var axisMinimum = [200,200,200,200];
var axisMaximum = [100,100,100,100];


while(true) {
  var output =  i2cFace.readModuleState(26,4);
  i2cFace.writeToRadio(8,output);
}
