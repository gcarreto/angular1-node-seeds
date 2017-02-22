
module.exports = function(app,prefix){
	
	app.get("/"+prefix+"/hello",function(req,res){
		res.end("hello world");
	});
}