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
    bytes[0] = byteBuffer[2];
    // pitch
    bytes[1] = byteBuffer[3];
    //throttle
    bytes[2] = byteBuffer[0];
    // yaw
    bytes[3] = byteBuffer[1];
  }
  console.log(bytes[0] + " " + bytes[1] + " " + bytes[2] + " " + bytes[3]);
  return bytes;
}
