var gulp   = require("gulp");
var CFG    = require("./utils/config.js");
var $      = require("gulp-load-plugins")();
var path   = require("path");
var pkg    = require(path.join("..", CFG.FILE.config.pkg));
var exec   = require("child_process").exec;
var notify = require("./utils/notify-style-compile");

/**
 * style:compile
 * @see compass-style.org
 * @see compass-style.org/help/tutorials/configuration-reference
 */
gulp.task("style:compile", ["style:lint"], function(callback) {
  var compassProcess = exec([
    "bundle",
    "exec",
    "compass",
    "compile",
    "--config",
    path.join(CFG.FILE.config.compass)
  ].join(" "), function(err, stdout, stderr) {
    $.util.log("[style:compile] stdout:", stdout);
    $.util.log("[style:compile] stderr: ", stderr);

    notify({
      message: "Compilation complete!"
    });

    if(null !== err) {
      $.util.log("[style:compile] err: ", err);
    }

    callback();
  });
});
