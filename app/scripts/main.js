(function(window, document, undefined) {
  "use strict";

  require.config({
    paths: {
      // Libraries
      "jquery": "../../libraries/jquery/jquery"
      // /Libraries
    },

    shim: {
    }
  });

  require(["jquery", "app"],
  function( $,        App) {
    console.log("App v%s with jQuery v%s says, '%s'", App.version, $.fn.jquery, App.greeting);
  });
})(window, document);
