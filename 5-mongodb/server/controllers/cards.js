var apiHandler = require('../lib/apiHandler');
var env = require('../config/appEnvironment');
var config = require('../config/config')[env];

var cards = exports.getCards = function(){
	
	return apiHandler.restApiHandler(config.holonis).catch(function(e){
		console.log(e);
		return [];
	}).then(function(rs){
		return rs;
	});	
}
/*
var options = {
	host:"hook.io",
	port:80,	
	method:'GET',
	path:"/holonis-dev/user?limit=1"
};

restApiHandler(options).then(function(rs){
	console.log(rs);
}).catch(function(e){
	console.log(e);
});
//*/