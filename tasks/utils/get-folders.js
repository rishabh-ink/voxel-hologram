var fs = require("fs");
var path = require("path");

// Courtesy github.com/gulpjs/gulp/blob/master/docs/recipes/running-task-steps-per-folder.md
module.exports = function getFolders (dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}
