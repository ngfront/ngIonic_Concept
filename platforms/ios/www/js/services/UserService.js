app.factory('SongSelectionService', function(){

	var favouriteSongs = [];
	FavoritesCount = 0;

	function addSongToFavorites(song){
		if(!song) return false;
		
		favouriteSongs.push(song);
		FavoritesCount++;
	};

	function fetchFavoriteSongs() {
		return favouriteSongs;
	};

	function removeSong(song) {

		var songRemoved = _.remove(favouriteSongs, function(songSpider) {
  			return songSpider.title === song;
		});
		FavoritesCount--;
	};

	function fetchFavCount() {
		return FavoritesCount;
	}

	return{
		addSongToFavorites 	: addSongToFavorites,
		fetchFavoriteSongs 	: fetchFavoriteSongs,
		removeSong 			: removeSong,
		fetchFavCount		: fetchFavCount
	}; 

});