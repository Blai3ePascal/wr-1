// Generated by CoffeeScript 1.6.3
var FileSet;

require("colors");

FileSet = require('./FileSet');

module.exports.run = function(cmd, files, opts) {
  var fileSet;
  fileSet = new FileSet(files, opts);
  return fileSet.whenChangedRun(cmd);
};
