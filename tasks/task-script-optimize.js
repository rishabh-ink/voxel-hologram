var gulp   = require("gulp");
var CFG    = require("./utils/config.js");
var $      = require("gulp-load-plugins")();
var path   = require("path");
var pkg    = require(path.join("..", CFG.FILE.config.pkg));
var notify = require("./utils/notify-script-test-unit");
var rjs    = require("requirejs");

/**
 * script:optimize
 * @see www.npmjs.org/package/requirejs
 */
gulp.task("script:optimize", ["script:test", "script:minify:json"], function (callback) {
  rjs.optimize({
    baseUrl: path.join(CFG.DIR.src, CFG.DIR.script),
    mainConfigFile: path.join(CFG.DIR.src, CFG.DIR.script, CFG.FILE.config.scriptMain),
    optimize: "uglify2",
    uglify2: {
      preserveComments: "some",
      compress: {
        drop_console: true,
        dead_code: true,
        drop_debugger: true,
        join_vars: true,
        warnings: false,
        pure_funcs: [/* "console.log" */]
      }
    },
    optimizeCss: "none",
    findNestedDependencies: true,
    include: [
      "app"
    ],
    exclude: [
      "hljs",
      "jquery"
    ],
    out: path.join(CFG.DIR.dist, CFG.DIR.script, CFG.FILE.config.scriptMain),
    wrap: {
      startFile: path.join(CFG.DIR.gulp, CFG.DIR.util, CFG.FILE.config.umdFragPrelude),
      endFile: path.join(CFG.DIR.gulp, CFG.DIR.util, CFG.FILE.config.umdFragCoda)
    }
  }, function(buildResponse) {
    callback();
  }, callback);
});
