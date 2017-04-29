var movies = [
	{
		title: "Batman Begins", 
		rating: 4.8, 
		hasWatched: true
	},
	{
		title: "The Bourne Identity", 
		rating: 4.7, 
		hasWatched: true
	},
	{
		title: "The Force Awakens", 
		rating: 4.6, 
		hasWatched: true
	},
	{
		title: "Love Actually", 
		rating: 4.4, 
		hasWatched: true
	}
	];

movies.forEach(function(movie) {
		var result = "You have ";
		if(movie.hasWatched){
			result += "seen ";
		} else {
			result += "not seen";
		}
		result += "\"" + movie.title + "\" - " + movie.rating + " stars";
		console.log(result);
	});