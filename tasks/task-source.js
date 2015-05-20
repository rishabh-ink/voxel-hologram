var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * source
 */
gulp.task("source", [], function() {
  var sources = [
    path.join(CFG.DIR.src, "*.*")
  ];

  return gulp.src(sources, { base: path.join(CFG.DIR.src) }) // base will ensure that `dist` does not contain the `lib` directory.
    .pipe(gulp.dest(path.join(CFG.DIR.dist)));
});
