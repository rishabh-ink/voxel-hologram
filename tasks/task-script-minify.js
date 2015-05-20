var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * script:minify
 * @see www.npmjs.org/package/gulp-uglify
 * @see github.com/mishoo/UglifyJS
 */
gulp.task("script:minify", ["script:test", "script:minify:json"], function () {
  // TODO Use gulp-header to add version info.

  return gulp.src([
      path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.script.js),
      CFG.DIR.exclude.test
    ], {
      base: CFG.DIR.src
    })
    .pipe($.uglify({
      outSourceMap: false, // Disable sourcemaps until github.com/gulpjs/gulp/issues/356
      preserveComments: "some",
      compress: {
        drop_console: true,
        dead_code: true,
        drop_debugger: true,
        join_vars: true,
        warnings: false,
        pure_funcs: [/* "console.log" */]
      }
    }))
    .pipe(gulp.dest(CFG.DIR.dist));
});
