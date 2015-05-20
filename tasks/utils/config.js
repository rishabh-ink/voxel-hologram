module.exports = {
  DIR: {
    src: "app",
    dist: "dist",
    bower: "libraries",
    npm: "node_modules",
    script: "scripts",
    style: "styles",
    image: "images",
    test: "tests",
    template: "templates",
    fixture: "fixtures",
    data: "data",
    unit: "unit",
    vendor: "vendor",
    gulp: "tasks",
    asset: "assets",
    util: "utils",
    git: ".git",

    report: "reports",
    coverage: "coverage",

    exclude: {
      markup: "!app/*.html",
      test: "!/**/test{,/**}" // Exclude test files; @see https://github.com/gulpjs/gulp/issues/165#issuecomment-32613179
    }
  }, // /DIR

  FILE: {
    config: {
      pkg: "package.json",
      styleLint: ".scsslintrc",
      scriptLint: ".jshintrc",
      compass: ".compassrc",
      bower: "bower.json",
      testMain: "main.js",
      karma: ".karmarc"
    },
    coverageReporter: {
      lcov: "lcov.info",
      junit: "junit.xml"
    },
    extension: {
      style: {
        scss: "scss",
        css: "css"
      },
      script: {
        js: "js",
        json: "json"
      },
      markup: {
        html: "html",
        template: "hbs"
      },
      image: {
        jpg: "jpg",
        png: "png"
      }
    }
  } // /FILE
};
