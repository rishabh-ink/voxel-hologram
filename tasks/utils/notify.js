var notifier = new require("node-notifier");
var extend   = require("extend");
var path     = require("path");
var CFG      = require("./config.js");
var pkg      = require(path.join("..", "..", CFG.FILE.config.pkg));

module.exports = {
  defaults: {
    title: pkg.name
  },

  showNotification: function (options) {
    extend(options, this.defaults);

    if("undefined" !== typeof(process.env.<%= _.kebabCase(props.appname).toUpperCase() %>_CI)) {
      // Running inside a CI environment, do not show notifications
      console.log("[notification]", options.message);
    } else {
      // Running inside a non-CI environment, okay to show notifications
      notifier.notify(options);
    }
  },

  appIcon: {
    sass: __dirname + "/../assets/images/sass-logo.png",
    karma: __dirname + "/../assets/images/karma-logo.png"
  }
};
