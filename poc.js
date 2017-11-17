'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();
var deadband_low = 250;
var deadband_high = 10
// set default channel_min_byte and channel_max_byte Array
var channel_min_byte = [200,200,200,200];
var channel_max_byte = [150,150,150,150];

// i2cFace.scan(0x0, 0x7F);
//
//i2cFace.listAddresses();

while(true) {
  var gimbalInput =  i2cFace.readModuleState(26,4);
  i2cFace.writeToRadio(8,normalizeBytes(gimbalInput));

}


// takes in a value from the i2c-gimbal module and converts it to PPM between 1000 and 2000 ms
function normalizeBytes(bytes) {
    var normalizedBytes = [];
    for (var i=0;i<bytes.length;i++) {
      if (bytes[i] > channel_min_byte[i] && bytes < deadband_low) {
        normalizedBytes.push(mapRange(bytes[i]),channel_min_byte[i],255,0,128);
      } else if (bytes[i] > deadband_high) {
        normalizedBytes.push(mapRange(bytes[i]),0,channel_max_byte[i],128,255);
      } else {
        //deadband
        normalizedBytes.push(0);
      }
    }
    return normalizedBytes;
}

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
