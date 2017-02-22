var passport = require('passport');
var env = require('./appEnvironment');
var config = require('./config')[env];

exports.authenticate = function(req,res,next){
	
    var auth = passport.authenticate('local',function(err,user){
		
        if(err){return next(err);}
        if(!user){ return res.send({success:false});}
        req.logIn(user,function(error){
            if(error){return next(error);}      
            res.send({success:true,user:user});
        });
        next();
    });
    auth(req,res,next);
}

exports.requiresLogin = function(req,res,next){
    if(!req.isAuthenticated()){
		res.redirect('/'+config.app_name+'/index');
        //res.status(403);
        //res.end();
    }else{
        next();
    }
};

/*
exports.requiresUserFieldToBe = function(field,value){
    return function(req,res,next){
        if(req.user[field] != value){
            res.status(403);
            res.end();
        }else{
            next();
        }
    }
}*/

/*
exports.requiresUserFieldToBeInList = function(field,values){
    return function(req,res,next){
        var success = false;
        for(var i = 0 ; i<values.length;i++){
            if(req.user[field]==values[i]){
                success = true;
                break;
            }
        }

        if(!success){
            res.status(403);
            res.end();
        }else{
            next();
        }

    }
}*/