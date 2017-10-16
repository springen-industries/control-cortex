var i2c = require('i2c');
var address = 0x0A;
var wire = new i2c(address, {device: '/dev/i2c-0'}); // point to your i2c address, debug provides REPL interface

wire.scan(function(err, data) {
  // result contains an array of addresses
  console.log(data);
});
