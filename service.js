'use strict';
var i2cUtils = require('./lib/i2c-utils');
var i2cFace = new i2cUtils();

i2cFace.scan(0x0, 0x7F);

i2cFace.listAddresses();

var output = i2cFace.readMessage(26);
console.log(output);
