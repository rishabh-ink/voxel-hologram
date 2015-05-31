var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));
var karma = require("karma").server;
var notify = require("./utils/notify-script-test-unit");

/**
 * script:test:unit
 * @see www.npmjs.org/package/karma
 * @see karma-runner.github.io
 */
gulp.task("script:test:unit", ["script:lint"], function (callback) {
  karma.start({
    configFile: __dirname + "/../" + CFG.FILE.config.karma,
    singleRun: true
  }, function(exitCode) {
    notify(exitCode);
    callback(exitCode);
  });
});
