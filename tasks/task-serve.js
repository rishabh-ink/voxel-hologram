var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));
var bs   = require("browser-sync");

/**
 * serve
 * @see www.browsersync.io
 * @see github.com/google/web-starter-kit/blob/master/gulpfile.js
 */
gulp.task("serve", ["build"], function () {
  bs({
    notify: true,
    injectChanges: true,
    startPath: path.join(CFG.DIR.src), // Hack path.join() to build a URL string.
    server: {
      baseDir: [path.join(__dirname, "..")] // `__dirname` is the current `gulp` directory so `..` is the project root directory.
    }
  });

  gulp.watch([
        path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.style.scss)
  ], [
    "style:compile"
  ]);

  gulp.watch([
    path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.markup.html)
  ], bs.reload);

  gulp.watch([
    path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.script.js)
  ], [
    "script:minify",
    "source"
  ]);

  gulp.watch([
    path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.image.jpg),
    path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.image.png)
  ], [
    "image:minify"
  ]);

  gulp.watch([
    path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.markup.template)
  ], [
    "template:precompile"
  ]);

  gulp.watch([
    path.join(CFG.DIR.dist, "/**/*.*")
  ], bs.reload);
});
