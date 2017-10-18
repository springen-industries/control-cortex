// When run, this program will output the same information as the
// command 'i2cdetect -y -r 1'

i2cUtils = function i2cUtils() {

var fs = require('fs'),
  i2c = require('i2c-bus'),
  i2c1 = i2c.openSync(1);
  var EBUSY = 16; /* Device or resource busy */


var knownAddresses = new Array();

this.listAddresses= function listAddresses(){
  for (i=0;i<knownAddresses.length;i++) {
    console.log(knownAddresses[i]);
  }
}

this.readMessage = function readMessage(address,length)  {
 // if (!knownAddresses.contains(address)) {
 //   return "address not found"
 // } else {
   var buf = new Buffer(10);
  i2c1.i2cReadSync(address,length,buf);
  return buf
 //}
}

this.scan = function scan(first, last) {
  var addr;

  fs.writeSync(0, '     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f');

  for (addr = 0; addr <= 127; addr += 1) {
    if (addr % 16 === 0) {
      fs.writeSync(0, '\n' + (addr === 0 ? '0' : ''));
      fs.writeSync(0, addr.toString(16) + ':');
    }

    if (addr < first || addr > last) {
      fs.writeSync(0, '   ');
    } else {
      try {
        i2c1.receiveByteSync(addr);
        fs.writeSync(0, ' ' + addr.toString(16)); // device found, print addr
        knownAddresses.push(addr);
        console.log(addr);
      } catch (e) {
        if (e.errno === EBUSY) {
          fs.writeSync(0, ' UU');
        } else {
          fs.writeSync(0, ' --');
        }
      }
    }
  }

  fs.writeSync(0, '\n');
}

}

module.exports = i2cUtils;
