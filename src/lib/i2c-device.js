// When run, this program will output the same information as the
// command 'i2cdetect -y -r 1'
var fs = require('fs'),
i2c = require('i2c-bus'),


const var EBUSY = 16; /* Device or resource busy */



/*
  address - address the device is listening on
  pull - indicates that device needs to be activly probe to deliver data
  push - indicates that the i2c device will raise an event on the master when it wants to send stuff

*/
var i2cDevice = {};
i2cDevice.i2cAddress = "";
i2cDevice.sampleType = "push";


i2cDevice.readMessage = (buffer,length) => {
  var buf = new Buffer(length);
  i2c1.i2cReadSync(moduleAddress,length,buf);
  return buf;
}

i2cDevice.writeMessage = (value,complete) => {
    try {
      i2c1.i2cWrite(this.i2cAddress,value.length,value,complete);
    }  catch(exception){
      console.log(exception);
    }
}




module.exports = i2cDevice;
