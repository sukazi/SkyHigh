exports.view = function(req, res){
  res.render("TennisLessons", {"name": "Gillian Grennan"});
};

exports.view = function(req, res){
	res.render("TennisLessons", {
		"container": [
		{"userName": "user1",
		 "image": "profile.pic",
		 "distance": ".3 miles away",
		 "bio": "Major: Compuer Engineering",
		 "id": "container1"
		},
		{"userName": "user2",
		 "image": "profile.pic",
		 "distance": ".5 miles away",
		 "bio": "2nd year Human Bio Major",
		 "id": "container2"
		},
		{"userName": "user3",
		 "image": "profile.pic",
		 "distance": "1 mile away",
		 "bio": "College: Revelle. Major: Psychology",
		 "id": "container3"
		},

		]
	});
};
