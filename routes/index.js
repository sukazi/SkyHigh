exports.view = function(req,res){
	projects = {'viewAlt' : false}
	res.render('index.handlebars', projects);
};

exports.viewAlt = function(req,res){
	projects = {'viewAlt' : true}
	res.render('index.handlebars', projects);
};
