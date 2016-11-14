var defaults = require('../defaults');
var manifestor = require('../manifestor');

module.exports = function(options) {
  var configFile = options && options['config'] || defaults.CONFIG_NAME;
  return manifestor.get(configFile)
    .then(function(config) {
      if (config.key) {
        console.log('https://script.google.com/macros/d/' + config.key + '/usercallback');
      } else {
        console.log('No Project Key provided in ' + configFile);
      }
    });
};
