'use strict';
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
      $scope.phones = data.splice(0, 5);
    });

    $scope.orderProp = 'age';
  }]);

/* Controllers */
<<<<<<< HEAD

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
	 'length':'3.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
	 'length':'3.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
	 'length':'3.'}
  ];
  $scope.name = "My World";
});
=======
>>>>>>> 16a935a46927e37b92a82cac5c419ce7c3634ac0
