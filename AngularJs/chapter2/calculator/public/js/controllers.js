var myAppModule = angular.module('myApp',[]);

myAppModule.controller('HelloController',function($scope){
	
	$scope.greeting = {text:'Hello'};		
});