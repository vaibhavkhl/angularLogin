'use strict';

angular.module('angularDemoApp')
  .controller('LoginCtrl', function ($scope,Data) {
    Data.get_local('scripts/lib/users.json').success(function(users_data){
    $scope.users_data = users_data[users][0]
    });
  });
