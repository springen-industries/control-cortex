
moduleFactory = {};

// do this with promises
moduleFactory.loadModules = function(moduleConfigs, done){
  promises = [];
  moduleConfigs.forEach( moduleConfig => {
    promises.push(moduleFactory.loadModule(moduleConfig));
  });
  Promise.all(promises).then( (modules) => { done(modules); } ).catch(ex => {console.log(ex)});
}



// for each device address that is not unique
// for each module name that is not unique
// for each type that is not known
// for each signal-type that is not known
// for each sample type that is not known
// for each filter set that is not valid
moduleFactory.enforceConstraints = function(modules){
  modules.reduce( function(addresses,mod) {
    if (mod.deviceAddress in addresses) {
      throw new Error("Found duplicate address:" + mod.deviceAddress);
    }
    addresses[mod.deviceAddress] = 1;
    return addresses;
  },{});
  //console.log(beautify(modules));
}


////////////
moduleFactory.loadModule = (moduleConfig) => {
  return new Promise(function(resolve,reject) {
    console.log("Loading Module:" + moduleConfig.name);
        if (true){
          return resolve(moduleConfig);
        }
        reject("Blah");

  });
}
//////////////
module.exports = moduleFactory;
