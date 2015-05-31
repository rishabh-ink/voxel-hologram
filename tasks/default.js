var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

/**
 * Default
 * Lists all available tasks.
 */
gulp.task("default", function () {
  $.util.log("Available tasks:");
  Object.keys(gulp.tasks).forEach(function (taskName) {
    $.util.log("\t", $.util.colors.yellow(taskName));
  });
  $.util.log("Use", $.util.colors.green("gulp serve"), "to get started.");
});
