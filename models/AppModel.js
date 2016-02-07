// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      // only play if nothing is playing
      if (!this.get('currentSong').has('title'))
      {
        this.set('currentSong', song);
      }
    }, this);

    params.library.on('enqueue', function(song) {
      // Add song to songQueue
      // check if song === currentSong
      if (this.get('currentSong') !== song) {
        this.get('songQueue').add(song);
      }
    }, this);

    params.library.on('dequeue', function(song) {
      // Add song to songQueue
      // check if song === currentSong
      this.get('songQueue').remove(song);
    }, this);

    params.library.on('ended', function(song) {
      // shift off the first song in the queue
      var shiftedSongInQueue = this.get('songQueue').shift();
      // play the song we just shifted
      this.set('currentSong', shiftedSongInQueue);
    }, this);
  }

});
