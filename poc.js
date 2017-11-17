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
  i2cFace.writeToRadio(8,normalizeBytes(output));

}


// Takes readings from i2c-gimbal and shifts them to 0-255 for easier conversion to PPM
function normalizeBytes(bytes) {
  for(var i=0;i<bytes.length;i++){
    if (bytes[i] > axisMinimum[i] ){
      bytes[i] = map_range(bytes[i],axisMinimum[i],255,0,128);
    } else {
      bytes[i] = map_range(bytes[i],0,axisMaximum[i],128,256);
    }
  }
  return bytes;
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
