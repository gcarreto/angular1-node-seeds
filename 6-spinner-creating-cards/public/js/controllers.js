var myAppModule = angular.module('holonisApp',[
	'jcs-autoValidate',
	'infinite-scroll',
	'angularSpinner']);

myAppModule.controller('HelloController',function($scope){
	
	$scope.greeting = {text:'Hello'};		
});

myAppModule.controller('RegistrationCtrl',function($scope){
	
	$scope.registrationModel = {};

	$scope.onSubmit = function () {
				
		console.log("Hey i'm submitted!");
		console.log($scope.registrationModel);
	
		//$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
		//	success(function (data) {
		//		console.log(":)")
		//	}).error(function(data) {
		//		console.log(":(")
		//	});
	};
	
});

myAppModule.controller('PersonDetailController',function($scope){
	
	$scope.greeting = {text:'Hello'};		
});

myAppModule.controller('CardsController', function ($scope,$http) {	
	
	/*
	var self = {
		isLoading:false
	};*/
	
	$scope.isLoading = false
	
	$scope.cards = [];
	
	$scope.card = {};
	
	$scope.getCards = function(){
		
		console.log("te ejecutsaste aqui ?",$scope.isLoading);
		
		if(!$scope.isLoading){
			$scope.isLoading = true;
			$http.get('/app/users/cards').success(function(data){				
				
				angular.forEach(data,function(card){
					$scope.cards.push(card);
				});

				$scope.isLoading = false;				
				
			}).error(function(data){
				console.log("error",data);
				$scope.isLoading = false;
			});
		}	
	};
	
	$scope.remove = function(index){
		$scope.cards.splice(index,1);
	}	
	
	$scope.createCard = function(){				
		
		$http.post('/app/users/cards',$scope.card).
			success(function(data){								
				if(data.success){					
					$scope.cards.splice(0,0,{
						name:$scope.card.name,
						username:$scope.card.username,
						email:$scope.card.email,
						phone:$scope.card.phone,
						address:{
							streetA:$scope.card.address,
							city:$scope.card.city,
							country:$scope.card.country
						}						
					});
					
					$scope.card = {};					
				}					
				
			}).error(function(data){
				console.log("error",data);
			});
			
	}
		
	//$scope.getCards();	
});

/*
myAppModule.controller('LoginController',function($scope,$http){	
	
	$scope.login = function(){
		
		console.log("data",$scope.loginForm);
		
		//$http.post('/app/login',$scope.loginForm).
		$http.post('/app/auth/facebook',$scope.loginForm).
			success(function(data){
				console.log("success",data);
			}).error(function(data){
				console.log("error",data);
			});
	};		
});
*/