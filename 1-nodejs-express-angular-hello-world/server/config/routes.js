var fs = require('fs');

module.exports = function(app,prefix){
	
	app.get("/"+prefix+"/hello",function(req,res){
		res.end("hello world");
	});
	
	app.get("/"+prefix+"/world",function(req,res){
		res.render("hello.html");
		//res.render("../../public/templates/hello.html");
	});
}