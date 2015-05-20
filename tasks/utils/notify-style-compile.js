var notify = require("./notify");

module.exports = function notifyStyleCompile (error) {
  notify.showNotification({
    subtitle: "Task style:compile",
    message: error.message,
    appIcon: notify.appIcon.sass
  });
};
