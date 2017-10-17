'use strict';

var i2c = require("i2c-bus");


var i2cUtils = require('./lib/i2c-utils');
new i2cUtils().scan(0x0, 0x7F);

function onResult(results){
  console.log(result);
}

var i2c1 = i2c.open();

function (cb) {
     // Display temperature
     i2c1.readWord(0x7F, 6, function (err, rawTemp) {
       if (err) return cb(err);
       console.log('temp: ' + toCelsius(rawTemp));
       cb(null);
     });
   }
