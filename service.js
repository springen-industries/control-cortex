'use strict';

var i2cUtils = require('./lib/i2c-utils');
new i2cUtils().scan(0x0, 0x7F);
