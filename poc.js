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
  i2cFace.writeToRadio(8,orderChannels(output));
}

// Takes readings from i2c-gimbal and shifts them to 0-255 for easier conversion to PPM
function orderChannels(bytes) {
  var byteBuffer = [255,255,255,255];
    // roll
    byteBuffer[2] = bytes[0];
    // pitch
    byteBuffer[3] = bytes[1];
    //throttle
    byteBuffer[0] = bytes[2];
    // yaw
    byteBuffer[1] = bytes[3];

  console.log(bytes[0] + " " + bytes[1] + " " + bytes[2] + " " + bytes[3]);
  return byteBuffer;
}
