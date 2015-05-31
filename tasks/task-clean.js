var gulp = require("gulp");
var CFG = require("./utils/config.js");
var del = require("del");

/**
 * clean
 * @see www.npmjs.org/package/del
 */
gulp.task("clean", del.bind(null, [
    CFG.DIR.dist,
    CFG.DIR.report
  ])
);
