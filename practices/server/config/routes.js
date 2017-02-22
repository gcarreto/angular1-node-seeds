var fs = require('fs');

module.exports = function(app,prefix){
	
	app.get("/"+prefix+"/hello",function(req,res){
		res.end("hello world");
	});
	
	app.get("/"+prefix+"/world",function(req,res){
		res.render("hello.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/"+prefix+"/first",function(req,res){
		res.render("first.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/"+prefix+"/second",function(req,res){
		res.render("second.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/"+prefix+"/third",function(req,res){
		res.render("third.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/cuarto",function(req,res){
		res.render("cuarto.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/quinto",function(req,res){
		res.render("quinto.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/seis",function(req,res){
		res.render("seis.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/siete",function(req,res){
		res.render("siete.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/ocho",function(req,res){
		res.render("ocho.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/nueve",function(req,res){
		res.render("nueve.html");
		//res.render("../../public/templates/hello.html");
	});

	app.get("/diez",function(req,res){
		res.render("diez.html");
	});

	app.get("/once",function(req,res){
		res.render("once.html");
	});

	app.get("/doce",function(req,res){
		res.render("doce.html");
	});

	app.get("/trece",function(req,res){
		res.render("trece.html");
	});
}