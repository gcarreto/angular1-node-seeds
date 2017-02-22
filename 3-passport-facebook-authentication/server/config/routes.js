var fs = require('fs');
var auth = require('./auth');

module.exports = function(app,prefix){
	
	app.get("/"+prefix+"/hello",function(req,res){
		res.end("hello world");
	});
		
	app.get("/"+prefix+"/",auth.requiresLogin,function(req,res){
		res.render("hello.html");
	});

	//app.get("/"+prefix+"/auth/facebook",auth.authFacebook({scope:'email'}));
	app.get("/"+prefix+"/auth/facebook",auth.authFacebook({scope:'user_about_me'}));
	
	app.get("/"+prefix+"/auth/facebook/callback",auth.authFacebook({
		successRedirect:'/'+prefix+"/",
		failureRedirect:'/login'
	}));

	app.post("/"+prefix+"/login",auth.authenticate);
	
	
	app.get("/"+prefix+"/index",function(req,res){
		res.render("login.html");
	});
	
	app.get("/"+prefix+"/logout",function(req,res){
		req.logout();
		res.redirect("/"+prefix+"/login");
	});
}