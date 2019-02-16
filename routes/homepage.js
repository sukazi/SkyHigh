
/*
 * GET home page.
 */

//JSON
exports.view = function(req, res){
  res.render("HomePage", {"name": "Gillian Grennan"});
};

