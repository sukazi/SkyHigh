exports.view = function(req, res){
  res.render("TennisLessons", data);
};

var data = {
	"name": "Gillian Grennan",
	"card": [{
					"id": "card1",
					"image": "blake_baumgartner.jpg",
					"userName": "Michael Scarn",
					"major": "Computer Engineer",
					"distance": ".1 miles away",
					"rate": "$7/hour",
					"star1":"fa fa-star checked",
					"star2":"fa fa-star checked",
					"star3":"fa fa-star checked",
					"star4":"fa fa-star",
					"star5":"fa fa-star",
					"twitter":"fa fa-twitter",
					"facebook":"fa fa-facebook",
				},
				{	"id": "card2",
					"image": "marc_isaia.jpg",
					"userName": "Marc Isaia",
					"bio": "Political Science",
					"distance": "1.2 miles away",
					"rate": "$5/hour",
					"star1":"fa fa-star checked",
					"star2":"fa fa-star checked",
					"star3":"fa fa-star checked",
					"star4":"fa fa-star checked",
					"star5":"fa fa-star",
					"twitter":"fa fa-twitter",
					"facebook":"fa fa-facebook",
				},
				{	"id": "card3",
					"image": "roger_federer.jpg",
					"userName": "Roger Federer",
					"bio": "Computer Science",
					"distance": ".7 miles away",
					"rate": "$9/hour",
					"star1":"fa fa-star checked",
					"star2":"fa fa-star checked",
					"star3":"fa fa-star checked",
					"star4":"fa fa-star",
					"star5":"fa fa-star",
					"twitter":"fa fa-twitter",
					"facebook":"fa fa-facebook",
				}
	]
};

