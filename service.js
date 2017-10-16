var i2c = require('i2c');
var oled = require('oled-ssd1306-i2c');


var opts = {
  width: 128, // screen width
  height; 32, // screen height
  address: 0x0A, // Pass I2C address of screen if it is not the default of 0x3C
  device: '/dev/i2c-1', // Pass your i2c device here if it is not /dev/i2c-1
  microview: true, // set to true if you have a microview display
};


var wire = new i2c(opts.address, {device: opts.device});

wire.scan(function(err, data) {
  // result contains an array of addresses
  console.log(data);
});


var oled = new oled(opts);


wire.read(length, function(err, res) {
  // result contains a buffer of bytes
  console.log(res.length);

});
