var i2c = require('i2c');
var address = 0x0A;
var wire = new i2c(address, {device: '/dev/i2c-1'}); // point to your i2c address, debug provides REPL interface

wire.read(length, function(err, res) {
  // result contains a buffer of bytes
  console.log(res.length);

});
