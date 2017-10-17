'use strict';
const raspi = require('raspi');
const I2C = require('raspi-i2c').I2C;
var i2c = require("i2c-bus");

var i2cUtils = require('./lib/i2c-utils');
new i2cUtils().scan(0x0, 0x7F);


raspi.init(() => {
  const i2c = new I2C();
  console.log(i2c.readByteSync(0x4f)); // Read one byte from the device at address 18
});
