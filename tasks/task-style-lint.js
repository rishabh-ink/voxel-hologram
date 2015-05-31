var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var exec = require("child_process").exec;
var path = require("path");
var notify = require("./utils/notify-style-lint");

/**
 * style:lint
 * @see github.com/causes/scss-lint
 * @see rubygems.org/gems/scss-lint
 */
gulp.task("style:lint", function (callback) {
  var scsslintProcess = exec([
    "bundle",
    "exec",
    "scss-lint",
    "--config",
    path.join(CFG.FILE.config.styleLint),
    path.join(CFG.DIR.src, CFG.DIR.style)
  ].join(" "), function(err, stdout, stderr) {
    $.util.log("[style:lint] stdout:", stdout);
    $.util.log("[style:lint] stderr: ", stderr);

    notify(stdout);

    if(null !== err) {
      $.util.log("[style:lint] err: ", err);
    }

    callback();
  });
});
