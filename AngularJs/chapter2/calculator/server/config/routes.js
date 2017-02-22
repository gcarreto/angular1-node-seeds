var fs = require('fs');

module.exports = function(app,prefix){
	
	app.get("/"+prefix+"/hello",function(req,res){
		res.end("hello world");
	});

	app.get("/"+prefix+"/shopping",function(req,res){
		res.render("shopping_cart.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/"+prefix+"/shopping2",function(req,res){
		res.render("shopping_cart2.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/"+prefix+"/calculator",function(req,res){
		res.render("calculator.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/"+prefix+"/deathray",function(req,res){
		res.render("deathray.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/"+prefix+"/selection_row",function(req,res){
		res.render("rowSelection.html");
		//res.render("../../public/templates/hello.html");
	});
}