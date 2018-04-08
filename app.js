'use strict';
var i2cUtils = require('./lib/i2c-utils');
var sleep = require("sleep");
var i2cFace = new i2cUtils();

var lastOutput;
var deadband_minimum = 250;
var deadband_maximum = 10;

var axisMinimum = [77,77,159,158];
var axisMaximum = [88,91,174,164];



function bandPass(lastOutput,output) {
	
	for(var i=0;i<4;i++){
		if (output[i] == 255 && lastOutput[i] != output[i] ) {
			lastOutput[i] = 255;
			console.log("caught random 255");
			return false;
		}
		var computedHighThreshold;
		if (!lastOutput[i]) {
			computedHighThreshold  = output[i] ; }
		else {
			computedHighThreshold = lastOutput[i] + 10;
		}
		var computedLowThreshold;
		if (!lastOutput[i]) {
			computedLowThreshold = output[i];
		} else {
			computedLowThreshold = lastOutput[i] -10;
		if (output[i] > computedHighThreshold ) {
			//console.log("Jump Up - axis: "+ i + " value:" + output[i] + " threshold for good value" + computedHighThreshold + " difference: ");
			return false;
		} else if (output[i] < computedLowThreshold) {
			//console.log("Jump Down - " + output[i] + " " + computedLowTreshold);
			return true;
		}
	}
	return true;
}
}
function go() { 
	while(true) {
		var output; // = lastOutput;
		try {
			output =  i2cFace.readModuleState(10,4);
			var goodValues = bandPass(output,output);
			if (goodValues) {
				i2cFace.writeToRadio(8,output);
				lastOutput = output;
			}
		} catch (ex) {
			console.log(ex);
		}
		if (output) {
		console.log(output[0] + " " +  output[1] +  " " + output[2] +  " " + output[3] );
		//i2cFace.writeToRadio(8,output);
		}
	}
}


go();

