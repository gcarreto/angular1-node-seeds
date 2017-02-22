var express = require('express');
var path = require('path');
module.exports = function(app,config){
	
	
	console.log("pasas otra vez");
	app.set('views',path.join(__dirname, "../../public/templates"));
	
	/*
	app.set('html');
	*/
	
	app.engine('html',require('ejs').renderFile);
	app.set('view engine','html');
	//app.set('view engine','ejs');
	app.use(express.static(path.join(__dirname, "../../public")));
	//app.use(express.static(__dirname + "/public"));
	//app.use(express.bodyParser());
	//app.use(express.compress());
}