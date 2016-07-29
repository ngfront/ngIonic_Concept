app.controller('DiscoverController', function($timeout) {
var dc = this;

dc.songs = [
     {
        "title":"Stealing Cinderella",
        "artist":"Chuck Wicks",
        "image_small":"https://i.scdn.co/image/d1f58701179fe768cff26a77a46c56f291343d68",
        "image_large":"https://i.scdn.co/image/9ce5ea93acd3048312978d1eb5f6d297ff93375d"
     },
     {
        "title":"Venom - Original Mix",
        "artist":"Ziggy",
        "image_small":"https://i.scdn.co/image/1a4ba26961c4606c316e10d5d3d20b736e3e7d27",
        "image_large":"https://i.scdn.co/image/91a396948e8fc2cf170c781c93dd08b866812f3a"
     },
     {
        "title":"Do It",
        "artist":"Rootkit",
        "image_small":"https://i.scdn.co/image/398df9a33a6019c0e95e3be05fbaf19be0e91138",
        "image_large":"https://i.scdn.co/image/4e47ee3f6214fabbbed2092a21e62ee2a830058a"
     }
];

    dc.currentSong = angular.copy(dc.songs[0]);

    console.log(dc.currentSong);
    console.log(!dc.currentSong.hide);
    

    function sendFeedback(bool) {

    		dc.currentSong.rated = bool;
    		dc.currentSong.hide = true;

    		

    		$timeout(function(){
    		
    			var randomIndexFromSongsArray = Math.round( Math.random() * (dc.songs.length-1) );
            	dc.currentSong = angular.copy(dc.songs[randomIndexFromSongsArray]);
    		}, 250);
          
    };

    // Function Bindings
    dc.sendFeedback = sendFeedback;
})




