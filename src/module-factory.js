
moduleFactory = {};

// do this with promises
moduleFactory.loadModules = function(moduleConfigs, done){
  promises = [];
  moduleConfigs.forEach( moduleConfig => {
    promises.push(moduleFactory.loadModule(moduleConfig));
  });

  Promise.all(promises).then(done).catch(ex => {console.log(ex)});
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
