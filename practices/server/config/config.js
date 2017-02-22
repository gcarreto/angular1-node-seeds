var APP_NAME = "app";

module.exports = {
	qa:{
		app_name: APP_NAME,
		port: process.env.PORT || 3000
	},
	development:{
		app_name:APP_NAME,
		port: process.env.PORT || 3000
	},
	prod:{
		app_name:APP_NAME,
		port: process.env.PORT || 3000
	}
};