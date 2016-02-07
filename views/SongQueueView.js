// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    // when song is added to the queue, re-render the view
    this.listenTo(this.collection, 'add', function(collection) {
      this.render();
    }, this);

    // when song is removed from the queue, re-render the view
    this.listenTo(this.collection, 'remove', function(collection) {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<div class="listHeader">SongQueue</div>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
