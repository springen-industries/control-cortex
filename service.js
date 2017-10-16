var i2c = require('i2c');
var oled = require('oled-ssd1306-i2c');
var wire = new i2c(opts.address, {device: opts.device});


var opts = {
  width: 128, // screen width
  height: 32, // screen height
  address: 0x7B, // Pass I2C address of screen if it is not the default of 0x3C
  device: '/dev/i2c-1', // Pass your i2c device here if it is not /dev/i2c-1

};


var oled = new oled(opts);

oled.turnOnDisplay();
// draws 4 white pixels total
// format: [x, y, color]
oled.drawPixel([
    [128, 1, 1],
    [128, 32, 1],
    [128, 16, 1],
    [64, 16, 1]
]);


wire.scan(function(err, data) {
  // result contains an array of addresses
  console.log(data);
});
