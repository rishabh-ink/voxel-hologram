var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));

/**
 * script:test
 */
gulp.task("script:test", ["script:test:unit" /*, "script:test:integration" */], function (callback) {
  callback();
});
