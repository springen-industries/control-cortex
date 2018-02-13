// When run, this program will output the same information as the
// command 'i2cdetect -y -r 1'

 {

var fs = require('fs'),
  i2c = require('i2c-bus'),
  i2c1 = i2c.openSync(1);
  var EBUSY = 16; /* Device or resource busy */




this.readModuleState = (moduleAddress,length) => {
  var buf = new Buffer(length);
  i2c1.i2cReadSync(moduleAddress,length,buf);
  return buf;
}

this.writeToRadio = (radioAddress,value) => {
    try {
      i2c1.i2cWriteSync(radioAddress,value.length,value);
    }  catch(exception){
      console.log(exception);
    }
}


}

module.exports = i2cUtils;
