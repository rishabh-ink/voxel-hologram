var notify = require("./notify");

module.exports = function notifyScriptTestUnit (exitCode) {
  var message = null;

  if(0 !== exitCode) {
    message = "Some tests failed.";

    notify.showNotification({
      subtitle: "Task script:test:unit",
      message: message,
      appIcon: notify.appIcon.karma
    });
  }
};
