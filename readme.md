# voxel-hologram [:star:](http://voxel-hologram-example-rsr.herokuapp.com/dist/docs)

> A minimal Hologram theme based on Voxel.

[![Travis](https://img.shields.io/travis/rishabhsrao/voxel-hologram.svg?style=flat-square "Build status")](https://travis-ci.org/rishabhsrao/voxel-hologram)
[![David](https://img.shields.io/david/rishabhsrao/voxel-hologram.svg?style=flat-square "Dependency status (Node modules)")](https://david-dm.org/rishabhsrao/voxel-hologram)
[![Gemnasium](https://img.shields.io/gemnasium/rishabhsrao/voxel-hologram.svg?style=flat-square "Dependency status (Ruby gems)")](https://gemnasium.com/rishabhsrao/voxel-hologram)
[![Code Climate](https://img.shields.io/codeclimate/github/rishabhsrao/voxel-hologram.svg?style=flat-square "Code Climate status")](https://codeclimate.com/github/rishabhsrao/voxel-hologram)
[![Coveralls](https://img.shields.io/coveralls/rishabhsrao/voxel-hologram.svg?style=flat-square "Test coverage status")](https://coveralls.io/r/rishabhsrao/voxel-hologram)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](license.md)


## :star: Live demo

See the [Voxel Hologram Example](https://github.com/rishabhsrao/voxel-hologram-example) project for a [live demo](http://voxel-hologram-example-rsr.herokuapp.com/dist/docs).


## :snowboarder: Usage

A prerequisite to using Voxel Hologram is that RequireJS should be used for all your style-guide components.

1. Install Voxel Hologram by running:

  ```
  bower install --save-dev voxel-hologram
  ```

2. Modify your Hologram configuration file by adding the following properties:

  ```
  # The title is displayed in the header and in the sidebar drawer.
  title: '<Your title>'

  # The subtitle is displayed next to the title in the header.
  subtitle: '<Your subtitle>'

  # This directory contains the _header and _footer templates.
  documentation_assets: '<Path to your bower_components directory>/voxel-hologram/dist'

  # This directory contains the templates required to generate the different types of code examples viz. html_example, js_example, table_example, jsx_example.
  code_example_templates: '<Path to your bower_components directory>/voxel-hologram/dist/_templates/code_examples'

  # This file renders the code example and prints the code.
  custom_markdown: '<Path to your bower_components directory>/voxel-hologram/dist/_templates/voxel_hologram_markdown_renderer.rb'

  # These directories contain additional images and fonts required by the Voxel theme.
  dependencies:
    - '<Path to your bower_components directory>/voxel/dist/images'
    - '<Path to your bower_components directory>/voxel/dist/fonts'

  # This is a list of your CSS files that you'd like to include as a link tag at the top of the page.
  # This will usually be your main CSS file that you want to document.
  css_include:
    - '<Path to the file that you'd like to include as a link tag>'
    - '<Another one>'
    - '<And so on...>'

  # This is a list of your JS files that you'd like to include as a script tag at the bottom of the page.
  js_include:
    - '<Path to the file that you'd like to include as a script tag>'
    - '<Another one>'
    - '<And so on...>'

  # This directory path is used by Voxel Hologram to load its custom version of Modernizr.
  bower_components_dir: '<Path to your bower_components directory>'

  # This file path is your main RequireJS configuration file which is loaded in the style guide via the data-main attribute.
  requirejs_main: '<Path to your main RequireJS configuration file>'

  # This string is used to split the category name and the sub-category name.
  namescope: ' - '
  ```

3. Run Hologram as usual, pointing to your modified Hologram configuration file.

For further reference, see the [Voxel Hologram Example](https://github.com/rishabhsrao/voxel-hologram-example) project.


## :rowboat: Get started

This project depends on the following tools:

* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org)
* [Bundler](http://bundler.io) gem

:tophat: **Tip** Use [nvm](https://github.com/creationix/nvm) and [rvm](http://rvm.io) for easy management of NodeJS and Ruby installations.

```
git clone git@github.com:rishabhsrao/voxel-hologram.git voxel-hologram
cd voxel-hologram
npm install
bundle install
./node_modules/.bin/bower install
./node_modules/.bin/gulp build && say awesome # Only on Mac OSX; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```

:tophat: **Tip** If you have global installations of `bower` and `gulp`, then you can avoid typing the `./node_modules/.bin/` bit.

:tophat: **Tip** Downloading dependencies over `git://` may be blocked if you are behind a firewall. The solution is to configure Git to use `https://` instead of `git://`. Run the following to force Git to use HTTPS:

```
git config url.https://.insteadOf git://
# Undo using git config unset url.https://
```


## :nut_and_bolt: Build

This project is built using [Gulp](http://gulpjs.com).

You can run a task using `./node_modules/.bin/gulp {{task-name}}`. The following build tasks are available:

* **build** Creates a build artifact, ready for deployment.
* **clean:deploy** Cleans all generated artifacts, except the distribution artifact.
* **clean** Cleans the distribution artifact and any other generated artifacts.
* **image:minify** Compresses the image files using [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin).
* **script:lint** Lints the JavaScript files using [JSHint](https://github.com/jshint/jshint).
* **script:minify:json** Minifies the JSON files using [JSON Minify](https://www.npmjs.org/package/gulp-jsonminify).
* **script:minify** Minifies the JavaScript files using [UglifyJS](http://github.com/mishoo/UglifyJS).
* **script:optimize** Combines and optimizes all RequireJS modules into one file using [RequireJS Optimizer](http://requirejs.org/docs/optimization.html).
* **script:test:report** Uploads the code coverage report to [Coveralls](https://coveralls.io).
* **script:test:unit** Runs the JavaScript unit tests using [Karma](http://karma-runner.github.io) and [Jasmine](http://jasmine.github.io).
* **script:test** Runs all the JavaScript tests.
* **source** Copies the source files in the distribution artifact.
* **style:compile** Compiles the Sass files using [Compass](http://compass-style.org).
* **style:lint** Lints the Sass files using [SCSS-Lint](https://github.com/causes/scss-lint).

:tophat: **Tip** It's a good idea to occasionally run:

```
git gc
npm prune && npm install
bower prune && bower install
bundle clean --force && bundle install
```

... to keep your repository lean and mean.


## :scroll: License

See [license.md](license.md).

The file, [voxel_hologram_markdown_renderer.rb](app/_templates/voxel_hologram_markdown_renderer.rb), was borrowed from the [Cortana](https://github.com/Yago/Cortana) project.
