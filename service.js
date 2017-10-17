'use strict';

var i2c = require("i2c-bus");


var i2cUtils = require('./lib/i2c-utils');
new i2cUtils().scan(0x0, 0x7F);


var i2c1 = i2c.open();
var result = i2c1.readByte(0x8f, 6, function (err, config) {
          if (err) return cb(err);
          if (config & 0x10) return read();
          cb(null);
        });

console.log(result);
