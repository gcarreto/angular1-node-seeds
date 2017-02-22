var promise = require('bluebird');
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var env = require('../config/appEnvironment');
var config = require('../config/config')[env];
var databaseUrl = "mongodb://"+config.mongodb.host+":"+config.mongodb.port+"/"+
	config.mongodb.database;

var insert = exports.insert = function(collectionName,item){
	
	return new Promise(function(resolve,reject){
		mongoClient.connect(databaseUrl,function(err,db){
			
			if(err){				
				//console.log("unable to connect to mongodb server. Error",err);
				return reject(err);
			}
						
			var collection = db.collection(collectionName);
			
			collection.insert([item],function(errr,result){
				if(errr){
					return reject(errr);
				}
				
				resolve(result);				
				db.close();
			});		
		});		
	});		
} 

var find = exports.find = function(collectionName,itemFilter){
	
	return new Promise(function(resolve,reject){
		mongoClient.connect(databaseUrl,function(err,db){
			
			if(err){				
				//console.log("unable to connect to mongodb server. Error",err);
				return reject(err);
			}
						
			var collection = db.collection(collectionName);
			
			collection.find(itemFilter).toArray(function(errr,result){
				if(errr){
					return reject(errr);
				}
				
				resolve(result);				
				db.close();
			});		
		});		
	});		
}

var findPaginated = exports.findPaginated = function(collectionName,itemFilter,limit,start){
	
	return new Promise(function(resolve,reject){
		mongoClient.connect(databaseUrl,function(err,db){
			
			if(err){				
				return reject(err);
			}
						
			var collection = db.collection(collectionName);			
			var cursor = collection.find(itemFilter);			
			cursor.limit(limit);
			cursor.skip(start);
			
			cursor.toArray(function(errr,result){
				if(errr){
					return reject(errr);
				}
				
				resolve(result);				
				db.close();
			});		
		});		
	});		
}

var update = exports.update = function(collectionName,updateCondition,newProperties){
	
	return new Promise(function(resolve,reject){
		mongoClient.connect(databaseUrl,function(err,db){
			
			if(err){				
				return reject(err);
			}
						
			var collection = db.collection(collectionName);			
			
			collection.update(updateCondition,{$set:newProperties},function(errr,result){
				if(errr){
					return reject(errr);
				}
				
				resolve(result.result.n);								
								
				db.close();
			});		
		});		
	});
}

var deleteItem = exports.deleteItem = function(collectionName,deleteCondition){
	
	return new Promise(function(resolve,reject){
		mongoClient.connect(databaseUrl,function(err,db){
			
			if(err){				
				return reject(err);
			}
						
			var collection = db.collection(collectionName);			
			
			collection.deleteOne(deleteCondition,function(errr,result){
				if(errr){
					return reject(errr);
				}				
				
				resolve(result.result.n);
								
				db.close();
			});		
		});		
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