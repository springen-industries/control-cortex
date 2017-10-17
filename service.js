'use strict';

var i2c = require("i2c-bus");


var i2cUtils = require('./lib/i2c-utils');
new i2cUtils().scan(0x0, 0x7F);


var i2c1 = i2c.open();
i2c1.readWord(0x7F,0x00, function (err,res){
  console.log(res);
} );
