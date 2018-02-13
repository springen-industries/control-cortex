
moduleFactory = {};
moduleFactory.loadModule = function(mod, done){
  console.log("Loading module:" + mod.name);
}
module.exports = moduleFactory;
