var APP_NAME = "app";

module.exports = {
	qa:{
		app_name: APP_NAME,
		port: process.env.PORT || 3000,
		retryLimit:4,
		facebook:{
			id:'1679404825643085',
			secret:'fd93fab59fb180ba8c99aacef38ee4d5',
			callbackURL : 'http://localhost:3000/app/auth/facebook/callback'
		},
		holonis:{
			host:"hook.io",
			port:80,
			method:'GET',
			path:"/holonis-dev/user?limit=1"
		}
	},
	development:{
		app_name:APP_NAME,
		port: process.env.PORT || 3000,
		retryLimit:4,
		facebook:{
			id:'1679404825643085',
			secret:'fd93fab59fb180ba8c99aacef38ee4d5',
			callbackURL : 'http://localhost:3000/app/auth/facebook/callback'
		},
		holonis:{
			host:"hook.io",
			port:80,
			method:'GET',
			path:"/holonis-dev/user?limit=5"
		}
	},
	prod:{
		app_name:APP_NAME,
		port: process.env.PORT || 3000,
		retryLimit:4,
		facebook:{
			id:'1679404825643085',
			secret:'fd93fab59fb180ba8c99aacef38ee4d5',
			callbackURL : 'http://localhost:3000/app/auth/facebook/callback'
		},
		holonis:{
			host:"hook.io",
			port:80,
			method:'GET',
			path:"/holonis-dev/user?limit=5"
		}
	}
};