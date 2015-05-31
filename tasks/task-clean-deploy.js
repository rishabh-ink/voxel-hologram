var gulp = require("gulp");
var CFG = require("./utils/config.js");
var del = require("del");

/**
 * clean
 * @see www.npmjs.org/package/del
 */
gulp.task("clean:deploy", del.bind(null, [
    CFG.DIR.npm,
    CFG.DIR.git,
    CFG.DIR.test
  ])
);
