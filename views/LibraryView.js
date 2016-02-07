// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<div class="listHeader">Library</div>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
