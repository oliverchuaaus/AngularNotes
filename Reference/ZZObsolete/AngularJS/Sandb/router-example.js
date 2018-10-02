var sampleApp = angular.module('phonecatApp', []);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'router-example-add.html',
        controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
        templateUrl: 'router-example-show.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
  }]);