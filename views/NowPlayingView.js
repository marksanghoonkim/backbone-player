// NowPlayingView - Backbone view that displays the current song playing
var NowPlayingView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<div class="nowPlaying"><b>Now Playing:</b> (<%= artist %>) - <%= title %></div>'),

  initialize: function() {
    this.render();
  },

  displaySong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    if (this.model.attributes.artist === undefined) {
      return this.$el.html('<div class="nowPlaying"><span style="opacity: 0">PLACEHOLDER</span></div>');
    } else {
      return this.$el.html(this.template(this.model.attributes));
    }
  }

});
