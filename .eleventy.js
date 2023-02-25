const yaml = require('js-yaml');

module.exports = function(conf) {
    // Copy over images directory
    conf.addPassthroughCopy('images');

    // Use yaml as data format
    conf.addDataExtension('yml, yaml', function (contents) {
        return yaml.load(contents);
    });
}