var fs = require('fs');
var auth = require('./auth');
var cardsController = require('../controllers/cards');

module.exports = function(app,prefix){
	
	app.get("/"+prefix+"/hello",function(req,res){
		res.end("hello world");
	});
	
	app.get("/"+prefix+"/cards",function(req,res){
		res.render("cards.html");
	});
		
	app.get("/"+prefix+"/",auth.requiresLogin,function(req,res){
		res.render("hello.html");
	});
	
	app.get("/"+prefix+"/users/cards",function(req,res){		
		cardsController.getCards().then(function(userCards){
			res.json(userCards);
		});		
	});
	
	app.post("/"+prefix+"/users/cards",function(req,res){		
		cardsController.saveCard(req.body).then(function(rs){
			res.json({'success':rs});
		});		
	});
	
	app.get("/"+prefix+"/auth/facebook",auth.authFacebook({scope:'email'}));
	
	
	app.get("/"+prefix+"/auth/facebook/callback",auth.authFacebook({
		successRedirect:'/'+prefix+"/",
		failureRedirect:'/'+prefix+"/index"
	}));			
	
	app.get("/"+prefix+"/index",function(r  ��  �� ��  ��  ��  ��                                                                                ��                                 ��                