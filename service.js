var i2c = require('i2c');
var oled = require('oled-ssd1306-i2c');



var opts = {
  width: 128, // screen width
  height: 32, // screen heigh
  address: 0x7B, // Pass I2C address of screen if it is not the default of 0x3C
  device: '/dev/i2c-1', // Pass your i2c device here if it is not /dev/i2c-1

};
var wire = new i2c(opts.address, {device: opts.device});s

var oled = new oled(opts);

oled.turnOnDisplay();


wire.scan(function(err, data) {
  // result contains an array of addresses
  console.log(data);
});
