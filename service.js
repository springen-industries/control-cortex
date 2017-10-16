var i2c = require('i2c');
var address = 0x0A;
<<<<<<< HEAD
var wire = new i2c(address, {device: '/dev/i2c-1'}); // point to your i2c address, debug provides REPL interface
=======
var wire = new i2c(address, {device: '/dev/i2c-0'}); // point to your i2c address, debug provides REPL interface
>>>>>>> 849936322467ad9f37403edfc6b6594448ed38a7

wire.scan(function(err, data) {
  // result contains an array of addresses
  console.log(data);
});
