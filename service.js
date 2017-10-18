'use strict';
var i2c = require("i2c-bus");
var i2cUtils = require('./lib/i2c-utils');

new i2cUtils().scan(0x0, 0x7F);

var GIMBAL_1_ADDRESS = 0x8F;

var i2c1 = i2c.openSync(0x8F);
var output = i2c1.i2cReadSync(0x8f,6, function() {} );
console.log(output);
