app.controller('DiscoverController', function($scope, $timeout, $ionicLoading, SongSelectionService, RecommendationsService) {
    var dc = this;
    songsList = [];

    // helper functions for loading
    var showLoading = function() {
     $ionicLoading.show({
      template: '<i class="ion-loading-c"></i>',
      noBackdrop: false
    });
  }

  var hideLoading = function() {
    $ionicLoading.hide();
  }

  // set loading to true first time while we retrieve songs from server.
  showLoading();

  
    // When Initialised
    RecommendationsService.init()
        .then(function(data){

            // Hide Loading
            hideLoading();
            dc.currentSongLoaded = true;
            
            songsList = data;

            dc.currentSong = songsList[0];
            dc.nextAlbumImg = songsList[1].image_large;
            // When the page first loads up
            RecommendationsService.playCurrentSong();
    });
 
    function nextSong() {
        // Show LoadingBar
        dc.currentSongLoaded = false;

        // 1. Pause Current Song 
        RecommendationsService.pauseCurrentSong();

        // 2. Remove 0th Element from SONGSLIST Array
        songsList.shift();
        console.log(songsList.length);

        // 3. Check if SongsList is DOWN
        if(songsList.length < 3) {
             RecommendationsService.getNextSong()
                .then(function(data){
                    console.log(data);
                    songsList = data;
            });
                 // 3. Fetching next song's Album art to Cache
                dc.nextAlbumImg =  songsList[1].image_large;

            // 4. Assigning Top of SONGSLIST Array to current Song
            $timeout(function(){
                dc.currentSong =  songsList[0];
                
                RecommendationsService.playCurrentSong();
            }, 250);

        }else{
              // 3. Fetching next song's Album art to Cache
                dc.nextAlbumImg =  songsList[1].image_large;

                // 4. Assigning Top of SONGSLIST Array to current Song
                $timeout(function(){
                    dc.currentSong =  songsList[0];
                    dc.currentSongLoaded = false;
                }, 250);

                RecommendationsService.playCurrentSong()
                    .then(function(){
                        dc.currentSongLoaded = true;
                    })
        }

    };

    function sendFeedback(bool) {
            
            dc.currentSong.rated = bool;
            dc.currentSong.hide = true;
            
            // Storing Into Favorites if FAVORITED(i.e bool = true)
            if(bool){
                SongSelectionService.addSongToFavorites(dc.currentSong);
               
            }
            nextSong();

    };

    function nextAlbumImg() {
        console.log(songsList[1]);
    };

    //Function Bindings
    dc.sendFeedback = sendFeedback;
    dc.nextAlbumImg = nextAlbumImg;

})




