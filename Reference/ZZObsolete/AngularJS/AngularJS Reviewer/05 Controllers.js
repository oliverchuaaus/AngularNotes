var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
	$scope.fullName = function() {
		if ($scope.firstName && $scope.lastName) {
			return $scope.firstName + " " + $scope.lastName;
		} else
			return "";
	};

});
