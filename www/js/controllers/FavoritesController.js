/*
Controller for the favorites page
*/
app.controller('FavoritesController', function($window, SongSelectionService, RecommendationsService) {
	
	var fc = this;

	fc.favoriteSongs = SongSelectionService.fetchFavoriteSongs();


	function removeSong(song, $index) {
		SongSelectionService.removeSong(song.title);
	};

	function openSong(song) {
		$window.open( song.open_url, "_system" );
	};

	// Function Bindings
	fc.removeSong = removeSong;
	fc.openSong = openSong;
})
