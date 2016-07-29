app.factory('RecommendationsService', function($q, $http, $cordovaMedia, SERVER){

	var songsQueue = [];

	function getNextSong() {

		var deferred = $q.defer(),
			BaseUrl = SERVER.url;

		$http.get(BaseUrl+'/recommendations')
			.success( function(data){
				songsQueue = songsQueue.concat(data);

				deferred.resolve(songsQueue);

			});
			return deferred.promise; 

	};

	function playCurrentSong() {

		var defer = $q.defer();

		media = new Audio( songsQueue[0].preview_url );




		media.addEventListener('loadeddata', function(){
			defer.resolve();
		});

		media.play();

		return defer.promise;





	};

	function pauseCurrentSong() {
		if (media) {
			media.pause();
		}
	};

	function init() {
		// if there are no songs FILL it
		if(songsQueue.length === 0) {
			return getNextSong();
		}
		else{
			return playCurrentSong();
		}
	}

	return {
		init 				: init,
		getNextSong 		: getNextSong,
		playCurrentSong 	: playCurrentSong,
		pauseCurrentSong 	: pauseCurrentSong
	}
})