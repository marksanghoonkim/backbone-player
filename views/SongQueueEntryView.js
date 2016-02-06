// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<div>(<%= artist %>) - <%= title %></div>'),

  events: {
    'click': function () {
      this.model.dequeue();
    },
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
