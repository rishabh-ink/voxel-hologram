var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * script:minify:json
 * @see www.npmjs.org/package/gulp-jsonminify
 */
gulp.task("script:minify:json", [], function () {
  return gulp.src([
      path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.script.json)
    ], {
      base: CFG.DIR.src
    })
    .pipe($.jsonminify())
    .pipe(gulp.dest(path.join(CFG.DIR.dist)));
});
