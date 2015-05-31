var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");

/**
 * script:test:report
 * @see www.npmjs.org/package/gulp-coveralls
 */
gulp.task("script:test:report", function () {
  return gulp.src([
      path.join(CFG.DIR.report, CFG.DIR.test, "**", CFG.FILE.coverageReporter.lcov)
    ])
    .pipe($.coveralls());
});
