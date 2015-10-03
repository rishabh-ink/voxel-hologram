# voxel-hologram [:star:](http://voxel-hologram-example-rsr.herokuapp.com/dist/docs)

> A minimal Hologram theme based on [Voxel](https://github.com/rishabhsrao/voxel).

[![Travis](https://img.shields.io/travis/rishabhsrao/voxel-hologram.svg?style=flat-square "Build status")](https://travis-ci.org/rishabhsrao/voxel-hologram)
[![Gemnasium](https://img.shields.io/gemnasium/rishabhsrao/voxel-hologram.svg?style=flat-square "Dependency status")](https://gemnasium.com/rishabhsrao/voxel-hologram)
[![Code Climate](https://img.shields.io/codeclimate/github/rishabhsrao/voxel-hologram.svg?style=flat-square "Code Climate status")](https://codeclimate.com/github/rishabhsrao/voxel-hologram)
[![Coveralls](https://img.shields.io/coveralls/rishabhsrao/voxel-hologram.svg?style=flat-square "Test coverage status")](https://coveralls.io/r/rishabhsrao/voxel-hologram)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](license.md)


## :star: Live demo

See the [Voxel Hologram Example](https://github.com/rishabhsrao/voxel-hologram-example) project for a [live demo](http://voxel-hologram-example-rsr.herokuapp.com/dist/docs).


## :snowboarder: Usage

Voxel Hologram has the following prerequisites:

* **[Babel Transpiler](https://rubygems.org/gems/babel-transpiler) gem** should be installed as Voxel Hologram supports ReactJS' JSX.
* **RequireJS** should be used for all your style guide components.
* **jQuery v~1.10** should be present & registered your RequireJS configuration.

To use Voxel Hologram, follow these steps below. Follow the :flashlight: link to refer the lines of code in [Voxel Hologram Example](https://github.com/rishabhsrao/voxel-hologram-example).

1. Install Voxel Hologram by running: [:flashlight:](https://github.com/rishabhsrao/voxel-hologram-example/blob/master/bower.json#L20)

  ```
  bower install --save-dev voxel-hologram
  ```

2. Modify your Hologram configuration file by adding the following properties: [:flashlight:](https://github.com/rishabhsrao/voxel-hologram-example/blob/master/.hologramrc)

  ```
  # The title is displayed in the header and in the sidebar drawer.
  title: '<Your title>'

  # The subtitle is displayed next to the title in the header.
  subtitle: '<Your subtitle>'

  # This directory contains the _header and _footer templates.
  documentation_assets: '<Path to your bower_components directory>/voxel-hologram/dist'

  # This directory contains the templates required to generate the different types of code examples viz. html_example, js_example, table_example, jsx_example.
  code_example_templates: '<Path to your bower_components directory>/voxel-hologram/dist/_templates/code_examples_templates'

  # This directory contains your custom code renderers. For example, if you want to have coffee_examples in your code, write a CoffeeScript renderer and place it in this folder.
  code_example_renderers: '<Path to your bower_components directory>/voxel-hologram/dist/_templates/code_example_renderers'

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

  # This string is used to set the color theme for Voxel.
  # Available themes: 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'gray', 'blue-gray'
  voxel_theme: 'gray'
  ```

3. In your RequireJS configuration, register the `voxel` and `voxel-hologram` modules: [:flashlight:](https://github.com/rishabhsrao/voxel-hologram-example/blob/master/app/scripts/main.js#L5-L6)

  ```
  // your_require_config.js
  // ...
  "voxel": "<Path to your bower_components directory>/voxel/dist/scripts/voxel",
  "voxel-hologram": "<Path to your bower_components directory>/voxel-hologram/dist/scripts/voxel-hologram"
  // ...
  ```

4. In your main RequireJS module, initialize the `voxel-hologram` module: [:flashlight:](https://github.com/rishabhsrao/voxel-hologram-example/blob/master/app/scripts/voxel-hologram-example.js#L52)

  ```
  // your_main_require_module.js
  require([..., "voxel-hologram", ...],
  function(...,  VoxelHologram, ...) {
    // ...
    VoxelHologram.create();
    // ...
  });
  ```

5. Run Hologram as usual, pointing to your modified Hologram configuration file. [:flashlight:](https://github.com/rishabhsrao/voxel-hologram-example/blob/master/tasks/style-doc.js#L15-L19)

For further reference, see the [Voxel Hologram Example](https://github.com/rishabhsrao/voxel-hologram-example) project.


## :leaves: Additional renderers

In addition to supporting the default [Hologram renderers](https://github.com/trulia/hologram#custom-code-example-renderers), Voxel Hologram adds the following renderers:

* `css_example` Displays your CSS in a CSS snippet block. Does not execute it.
* `html_display_only_example` Displays your HTML in a HTML snippet block. Does not execute it.
* `html_execute_only_example` Executes your HTML on the page. Does not display it.
* `js_display_only_example` Displays your JS in a JS snippet block. Does not execute it.
* `js_execute_only_example` Executes your JS on the page. Does not display it.
* `jsx_display_only_example` Displays your JSX in a JSX snippet block. Does not execute it.
* `jsx_execute_only_example` Executes your JSX on the page. Does not display it.


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

The folders, [code_example_renderers](app/_templates/code_example_renderers) and [code_example_templates](app/_templates/code_example_templates), were borrowed from the [Pivotal UI](https://github.com/pivotal-cf/pivotal-ui) project.
