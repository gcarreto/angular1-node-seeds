var myAppModule = angular.module('deathrayApp',[]);

myAppModule.controller('DeathrayMenuController',function($scope){

  $scope.isDisabled = false;
	$scope.menuState = {show:false};

	$scope.toggleMenu = function () {
    $scope.menuState.show = !$scope.menuState.show;
  };

  $scope.stun = function () {
    $scope.isDisabled = 'true';
  };

});