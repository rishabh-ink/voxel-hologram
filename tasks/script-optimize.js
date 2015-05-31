var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));
var notify = require("./utils/notify-script-test-unit");
var rjs = require("requirejs");

/**
 * script:optimize
 * @see www.npmjs.org/package/requirejs
 */
gulp.task("script:optimize", ["script:test"], function (callback) {
  rjs.optimize({
    baseUrl: path.join(CFG.DIR.src, CFG.DIR.script),
    mainConfigFile: path.join(CFG.DIR.src, CFG.DIR.script, CFG.FILE.config.scriptMain),
    optimize: "none",
    optimizeCss: "none",
    findNestedDependencies: true,
    include: [
      CFG.FILE.config.appModule
    ],
    exclude: [
      "hljs",
      "jquery",
      "voxel"
      // Add additional libraries to exclude.
    ],
    out: path.join(CFG.DIR.dist, CFG.DIR.script, CFG.FILE.config.appMain)
  }, function(buildResponse) {
    callback();
  }, callback);
});
