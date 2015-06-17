var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  baseUrl: "/base",

  paths: {
    // Libraries
    "jquery": "libraries/jquery/jquery",
    "voxel": "libraries/voxel/dist/scripts/voxel",
    // /Libraries

    // Application
    "voxel-hologram": "app/scripts/voxel-hologram",
    // /Application

    // Fixtures
    "voxel-hologram-fixture": "tests/fixtures/voxel-hologram-fixture"
    // /Fixtures
  },

  shim: {
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
