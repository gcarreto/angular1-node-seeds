var apiHandler = require('../lib/apiHandler');
var env = require('../config/appEnvironment');
var config = require('../config/config')[env];
var mongodb = require('../lib/mongodb');

exports.getCards = function(){
	
	return apiHandler.restApiHandler(config.holonis).catch(function(e){
		console.log(e);
		return [];
	}).then(function(rs){
		return rs;
	});	
}

exports.saveCard = function(cardData){
	
	return mongodb.insert("usersTemporal",cardData).catch(function(rr){
		console.log(rr);
		return false;
	}).then(function(rs){
		console.log(rs);
		return rs?true:false;
	});	
}


/*
insert("usersTemporal",{name:"simple name",opt:"simple extra",antoo:"works"}).then(function(rs){
	console.log(rs);
}).catch(function(rr){
	console.log(rr);
});
*/

/*
find("usersTemporal",{name:"simple name"}).then(function(rs){
	console.log(rs);
}).catch(function(rr){
	console.log(rr);
});
/*/

/*
findPaginated("usersTemporal",{name:"simple name"},1,1).then(function(rs){
	console.log(rs);
}).catch(function(rr){
	console.log(rr);
});
//*/

/*
update("usersTemporal",{name:"simple name"},{supercoolProp:"coolestValueEver"}).then(function(rs){
	console.log(rs);
}).catch(function(error){
	console.log(error);
});
//*/

/*
deleteItem("usersTemporal",{name:"simpler"}).then(function(rs){
	console.log(rs);
}).catch(function(error){
	console.log(error);
});
*/