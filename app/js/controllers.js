'use strict';
/* Controllers */

//var phonecatApp = angular.module('phonecatApp', []);

var phonecatControllers = angular.module('phonecatControllers', []);

/*phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
      $scope.phones = data.splice(0, 5);
    });

    $scope.orderProp = 'age';
  }]);
*/

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);