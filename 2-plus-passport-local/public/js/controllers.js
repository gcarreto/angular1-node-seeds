var myAppModule = angular.module('myApp',[]);

myAppModule.controller('HelloController',function($scope){
	
	$scope.greeting = {text:'Hello'};		
});

myAppModule.controller('LoginController',function($scope,$http){	
	
	$scope.login = function(){
		
		console.log("data",$scope.loginForm);
		
		$http.post('/app/login',$scope.loginForm).
			success(function(data){
				console.log("success",data);
			}).error(function(data){
				console.log("error",data);
			});
	};		
});