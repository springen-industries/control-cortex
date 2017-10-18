'use strict';
var i2c = require("i2c-bus");
var i2cUtils = require('./lib/i2c-utils');

new i2cUtils().scan(0x0, 0x7F);

var GIMBAL_1_ADDRESS = 0x8F;

var i2c1 = i2c.openSync(1);
var output = i2c1.i2cReadSync(GIMBAL_1_ADDRESS,6);
console.log(output);
