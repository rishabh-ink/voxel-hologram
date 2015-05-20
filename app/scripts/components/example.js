define(["jquery"],
function($) {
  "use strict";

  var Example = {
    defaults: {
      /**
       * Component name slug.
       */
      name: "example",

      /**
       * jQuery selectors.
       */
      elements: {
        exampleSub: "[data-js~='exampleSubElement']"
      },

      /**
       * Add or remove classes.
       */
      classnames: {
        exampleSubActive: "example-sub--active"
      },

      // add more options...
    },

    /**
     * Fetched jQuery elements.
     */
    elements: {},

    /**
     * Child components.
     */
    components: {},

    /**
     * Component constants.
     */
    constants: {},

    create: function(options) {
      this.options = $.extend(true, {}, this.defaults, options);

      this.init();

      return this;
    },

    init: function(options) {

      this.fetch();
      this.attach();
      this.setup();

      return this;
    },

    fetch: function() {
      // this.elements.exampleSub = $(this.options.elements.exampleSub);

      console.log(this.options.name, "fetch()", "Fetched", { elements: this.elements });

      return this;
    },

    attach: function() {
      var events = {};

      // events["click." + this.options.name] = $.proxy(this.eventExampleSubClicked, this);

      // this.elements.exampleSub.on(events);

      console.log(this.options.name, "attach()", "Attached events", { events: events });
      return this;
    },

    setup: function() {
      // this.components.childComponent = ChildComponent.create({ /* ... options ... */ });

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });
      return this;
    },

    destroy: function() {
      // this.elements.exampleSub.off(".example");

      return this;
    }
  };

  return Object.create(Example);
});
