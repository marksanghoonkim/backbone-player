// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // tagName: 'tr',

  template: _.template('<div>(<%= artist %>) - <%= title %></div>'),

  events: {
    'click': function() {
      // if a song is currently playing, then this.model.enqueue()
      this.model.play();
      this.model.enqueue();
    },

    // 'enqueue': function()
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
