var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var env = require('./appEnvironment');
var config = require('./config')[env];

module.exports = function(passport){

	passport.use('local',new LocalStrategy(function(username,password,done){			
	
		if(username=="cool" && password=="nice"){
			return done(null,{username:"cool",email:"cool_email@gmail.com",prop1:"any value"});
		}else{
			return done(null,false);
		}
    }));
	
	passport.use(new FacebookStrategy({
		clientID	:config.facebook.id,
		clientSecret:config.facebook.secret,
		callbackURL	:config.facebook.callbackURL
	},
	function(token,refreshToken,profile,done){
		
		console.log("profile",profile);
		if(profile){
			return done(null,{username:profile.displayName,email:"cool_email@gmail.com",prop1:profile.id});
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