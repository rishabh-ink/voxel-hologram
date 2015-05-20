var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var argv = require("yargs").argv;
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * script:lint
 * @see www.npmjs.org/package/gulp-jshint
 */
gulp.task("script:lint", function () {
  var reporter = argv.reporter || "jshint-stylish"; // See www.npmjs.org/package/jshint-stylish

  return gulp.src([
      path.join(CFG.DIR.src, "/**/*.", CFG.FILE.extension.script.js),
      path.join(CFG.DIR.test, "/**/*.", CFG.FILE.extension.script.js)
    ])
    .pipe($.jshint(CFG.FILE.config.scriptLint))
    .pipe($.jshint.reporter(reporter));
});
