var myAppModule = angular.module('controllerApp',[]);

myAppModule.controller('CalculatorController',function($scope){
	
	$scope.funding = {startingEstimate:0};

	//var computeNeeded = function () {
  $scope.computeNeeded = function () {

	  $scope.funding.needed = $scope.funding.startingEstimate * 10;
  };

  $scope.requestFunding = function () {

    window.alert("Sorry, please get more customers first");
  }

  $scope.reset = function () {

    $scope.funding.startingEstimate = 0;
    $scope.funding.needed = 0;
  }

  //$scope.$watch('funding.startingEstimate',computeNeeded);

});