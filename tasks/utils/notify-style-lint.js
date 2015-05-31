var notify = require("./notify");
var util = require("util");

module.exports = function notifyStyleLint (stdout) {
  var messages = stdout.split("\n");

  messages.pop(); // Remove last empty new message.

  if(0 < messages.length) {
    var message = util.format("%d lint warning(s) found.", messages.length);

    notify.showNotification({
      subtitle: "Task style:lint",
      message: message,
      appIcon: notify.appIcon.sass
    });
  }
};
