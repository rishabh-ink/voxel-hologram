(function(window, document, undefined) {
  "use strict";

  require.config({
    paths: {
      // Libraries
      "jquery": "../../libraries/jquery/jquery",
      "hljs": "../../libraries/highlightjs/highlight.pack",
      "voxel": "../../libraries/voxel/dist/scripts/voxel"
      // /Libraries
    },

    shim: {
    }
  });

  require(["jquery", "voxel-hologram"],
  function( $,        VoxelHologram) {
    var voxelHologram = VoxelHologram.create();
  });
})(window, document);
