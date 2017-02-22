var http = require('http');
var promise = require('bluebird');
var env = require('../config/appEnvironment');
var config = require('../config/config')[env];

var restApiHandler = exports.restApiHandler = function(options,parse){

	parse!=undefined || (parse=true)

	return new Promise(function(resolve,reject){
		
		(function getData(tries){						
			
			var req = http.request(options,function(response){
			
				if(response.statusCode == 200){
					
					var str = '';
				
					response.on('data',function(chunk){			
						str += chunk;
					});

					response.on('end',function(){
						if(parse){
							var jsonFix = str.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2":');
							jsonFix = jsonFix.replace(/:([ ])?[']/g,':"');
							jsonFix = jsonFix.replace(/['](,|[ ]})/g,'"$1');
							jsonFix = jsonFix.replace(/[[]([a-zA-Z0-9_]+)]/g,'["$1"]');
							
							//console.log('json',jsonFix);
							try{
								var parsedResponse = JSON.parse(jsonFix);											
								resolve(parsedResponse);
							}catch(err){																
										
								if(tries==config.retryLimit){
									return reject({
										"error":"failed to be parsed"
									});
								}		
								
								getData(tries+1);
							}
						
						}else{
							resolve(str);
						}									
					});//end response.on('end',function(){
				}else{
					
					var str = '';
					
					response.on('data',function(chunk){			
						str += chunk;
					});

					response.on('end',function(){
						//console.log(JSON.parse(str));
						reject({
							code:response.statusCode,
							error:str
						});				
					});
				}//end else				
			});//end var req = http.request(options,function(response){

			req.end();
			
		})(0);				
	});							
};

/*
module.exports = function restApiHandler(req,res,options,respond){

    var sendResponse = respond!=undefined?respond:true;
    var params = req.body;

    if(req.headers.dealer){
        options.headers.dealer = req.headers.dealer;
    }

    if(req.method == 'POST' || req.method == 'PUT'){
        options.headers['content-type'] = 'application/json';
    }else{
        options.headers['content-type'] = null;
    }

    options.path = req.originalUrl;
    options.method = req.method;

    var req = http.request(options,function(response){
        responseHandler(response,res,sendResponse);
    });


    if(req.method == 'POST' || req.method == 'PUT'){
        req.write(JSON.stringify(params));
    }

    req.end();

};


function responseHandler(response,res,respond){

    if(response.statusCode == 404 || response.statusCode == 400){
        if(respond){
            res.status(response.statusCode);

            var str = '';
            response.on('data',function(chunk){
                str += chunk;
            });

            response.on('end',function(){
                if(str){
                    try{
                        res.json(JSON.parse(str));
                    }catch(e){
                        res.end(str);
                    }
                }else{
                    res.end();
                }
            });
        }
    }else{
        var str = '';
        response.on('data',function(chunk){
            str += chunk;
        });

        response.on('end',function(){
            if(respond){
                res.status(response.statusCode);
                res.json(JSON.parse(str));
            }
        });
    }

}
*/