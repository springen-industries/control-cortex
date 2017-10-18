'use strict';
var i2cUtils = require('./lib/i2c-utils');
var i2cFace = new i2cUtils();

i2cFace.scan(0x0, 0x7F);
//read six bytes of data from 0x9A
var output = i2cFace.readMessage(0x9A,6);
console.log(output);
