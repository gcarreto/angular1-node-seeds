var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){

	passport.use('local',new LocalStrategy(function(username,password,done){			
	
		if(username=="cool" && password=="nice"){
			return done(null,{username:"cool",email:"cool_email@gmail.com",prop1:"any value"});
		}else{
			return done(null,false);
		}
    }));
	
    passport.serializeUser(function(user,done){
		console.log('user',user);
        if(user){	
            done(null,user.email);
        }else{
			done(null,false);
		}
    });

    passport.deserializeUser(function(id,done){		
		console.log("id:",id);
		if(id){
			return done(null,{username:"cool",email:"cool_email@gmail.com",prop1:"any value"});
		}else{
			return done(null,false);
		}	
    });
}