/* Code Suha added to add portfolio page */
exports.view = function(req,res){
	res.render('ActivityScreen.handlebars');
}

function searchBar(){
	var input, filter, ul, li, a , i, txtValue;

	input = ActivityScreen.getElementByID('myinput');
	filter = input.value.toUpperCase();
	ul = ActivityScreen.getElementsByTagName("myUL");
	li = ul.getElementsByTagName('li');

	for(i=0;i<li.length;i++){
		a = li[i].getElementByTagName("a")[0];
		txtValue = a.textContent || a.innterText;
		if(txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} 
		else{
			li[i].stle.display = "none";
		}
	}
}

