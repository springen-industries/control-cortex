'use strict';
var i2c = require("i2c-bus");
var i2cUtils = require('./lib/i2c-utils');

new i2cUtils().scan(0x0, 0x7F);
//read six bytes of data from 0x9A
readMessage(0x9A,6);
