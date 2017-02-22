var myAppModule = angular.module('holonisApp',['jcs-autoValidate','infinite-scroll']);

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

myAppModule.controller('PersonsController', function ($scope,$http) {
	
	$scope.persons = [];
	
	$scope.getCards = function(){
		
		$http.get('/app/users/cards').
			success(function(data){
				console.log("success",data);
				
				angular.forEach(data,function(card){
					$scope.persons.push(card);
				});
				
			}).error(function(data){
				console.log("error",data);
			});

	};
		

	$scope.getCards();
		/*
	$scope.persons = [
		{
			"name": "Gregory Huffman",
			"email": "Praesent@pedenec.net",
			"birthdate": "2015-03-23T18:00:37-07:00",
			"phonenumber": "07624 073918",
			"address": "5880 Sed, Street",
			"city": "Denderbelle",
			"country": "Ethiopia"
		},
		{
			"name": "Tad Vazquez",
			"email": "dapibus.gravida@necimperdietnec.co.uk",
			"birthdate": "2015-12-28T06:02:56-08:00",
			"phonenumber": "(016977) 1036",
			"address": "830-6354 Cubilia Rd.",
			"city": "Sulzbach",
			"country": "Liechtenstein"
		},
		{
			"name": "William Abbott",
			"email": "non.justo.Proin@mauris.net",
			"birthdate": "2015-07-30T09:00:15-07:00",
			"phonenumber": "(01984) 57054",
			"address": "418-3595 Orci, St.",
			"city": "Lint",
			"country": "Sierra Leone"
		},
		{
			"name": "Amal Shaw",
			"email": "ornare.sagittis@ipsumPhasellus.co.uk",
			"birthdate": "2014-06-01T11:06:13-07:00",
			"phonenumber": "076 4830 0002",
			"address": "Ap #706-3890 Lobortis St.",
			"city": "Baiso",
			"country": "Faroe Islands"
		},
		{
			"name": "Avram Barrett",
			"email": "Donec@lobortisultrices.co.uk",
			"birthdate": "2014-07-17T19:31:30-07:00",
			"phonenumber": "(01289) 68589",
			"address": "560-5646 Ipsum Rd.",
			"city": "Grand-Manil",
			"country": "Trinidad and Tobago"
		},
		{
			"name": "Hamilton Webb",
			"email": "Nam@noncursusnon.ca",
			"birthdate": "2015-12-11T19:31:34-08:00",
			"phonenumber": "(01913) 41035",
			"address": "696-957 Morbi Street",
			"city": "Grand-Halleux",
			"country": "Montenegro"
		},
		{
			"name": "Emerson Osborn",
			"email": "Sed.congue@auctor.co.uk",
			"birthdate": "2015-04-07T12:13:00-07:00",
			"phonenumber": "0800 090144",
			"address": "295-673 Ac Ave",
			"city": "Baracaldo",
			"country": "South Georgia and The South Sandwich Islands"
		},
		{
			"name": "Rashad Johnson",
			"email": "fringilla.Donec@Infaucibus.org",
			"birthdate": "2014-09-22T18:20:45-07:00",
			"phonenumber": "(022) 8324 6041",
			"address": "P.O. Box 904, 7138 Metus Rd.",
			"city": "Wichelen",
			"country": "Niger"
		},
		{
			"name": "Brody Page",
			"email": "nibh.Phasellus@eratvel.co.uk",
			"birthdate": "2014-10-22T17:28:13-07:00",
			"phonenumber": "(013459) 03264",
			"address": "7456 Augue Rd.",
			"city": "Pocatello",
			"country": "Malta"
		},
		{
			"name": "Armando Bradford",
			"email": "rutrum.eu@velpedeblandit.com",
			"birthdate": "2016-02-04T23:16:13-08:00",
			"phonenumber": "070 7348 5382",
			"address": "P.O. Box 401, 8742 Sed St.",
			"city": "Crewe",
			"country": "Philippines"
		},
		{
			"name": "Malik Carpenter",
			"email": "id.ante@pede.edu",
			"birthdate": "2014-08-08T15:40:44-07:00",
			"phonenumber": "(0115) 666 9816",
			"address": "Ap #297-3670 Non, Rd.",
			"city": "Harrisburg",
			"country": "Vanuatu"
		}
	];
	*/
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