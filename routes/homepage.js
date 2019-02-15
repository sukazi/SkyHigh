
/*
 * GET home page.
 */

//JSON
exports.view = function(req, res){
  res.render("index", {"name": "Gillian Grennan"});
};

