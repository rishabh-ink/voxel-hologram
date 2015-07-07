var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));

/**
 * image:minify
 * @see www.npmjs.org/package/gulp-imagemin
 */
gulp.task("image:minify", function () {
  return gulp.src([
      path.join(CFG.DIR.src, CFG.DIR.image, "**/*")
    ])
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(path.join(CFG.DIR.dist, CFG.DIR.image)))
    .pipe($.size({
      title: "images"
    }));
});
