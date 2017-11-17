'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();

// set default channel_min_byte and channel_max_byte Array
var channel_min_byte = [200,200,200,200]
var channel_max_byte = [150,150,150,150]

// i2cFace.scan(0x0, 0x7F);
//
//i2cFace.listAddresses();

while(true) {
  var output =  i2cFace.readModuleState(26,4);
  for(i=0; i < output.length; i++){
      i2cFace.writeToRadio(8,normalizeBytes(output));
  }
}


// takes in a value from the i2c-gimbal module and converts it to PPM between 1000 and 2000 ms
function normalizeBytes(bytes) {
    // byte will be between 0 and 255
    // bytes represent range of inputs as described below
    // Low  | Middle | High
    // 200 - 250 | 0-10  | 10 - 100
    // use auto calibration to determine actual endpoints and then generate
    // a 5% deadband around stick centers
    // make deadband tweakabe as a percentage
    for (var i=0;i<bytes.length;i++) {
      // normalize value
      // value needs to be shifted to where 128 is the middle stick value between 0 and 255
      var normalizedBytes = {};
      if (bytes[i] > channel_min_byte[i] && byte < deadband_low) {
        // byte represents a value in the range of  channel_min_byte (default 200) but not in deadban.
        // byte needs to be shifted from its current range to representing somewhere between 0 and 128 (low half)
        // of normalized byte array
        normalizedBytes.push(mapRange(bytes[i]),channel_min_byte[i],255,0,128);
      } else if (byte > deadband_high) {
        //byte's value is above whatever the high deadband is,
        normalizedBytes.push(mapRange(bytes[i]),0,channel_max_byte[i],128,255);
      } else {
        //deadband
        normalizedBytes.push(0)
      }
    }
    return bytes;
}

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
