(function(window, document, undefined) {
  "use strict";

  require.config({
    paths: {
      // Libraries
      "jquery": "../../libraries/jquery/jquery",
      "hljs": "../../libraries/highlightjs/highlight.pack",
      "voxel": "../../libraries/voxel/dist/scripts/main"
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
