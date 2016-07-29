/*
Controller for our tab bar
*/
app.controller('TabsController', function($scope, SongSelectionService, RecommendationsService) {
	var tc = this;


function enteringFavorites() {
	RecommendationsService.pauseCurrentSong();
};


function leavingFavorites() {
    RecommendationsService.init();
 };

function favCount() {
	return SongSelectionService.fetchFavCount();
};

// Function Bindings
tc.enteringFavorites 	= enteringFavorites;
tc.leavingFavorites 	= leavingFavorites;
tc.favCount 			= favCount;


});