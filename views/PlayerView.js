// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  
  el: '<audio controls autoplay class="audioPlayer"/>',

  events: {
    'ended': function() {
      this.model.ended();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
