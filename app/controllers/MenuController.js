angular.module('Shopify')

.controller('MenuController', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.activeTab = 'activeProducts';
  
  $scope.activateTab = function (tab) {
    $scope.activeTab = tab;
  };
}]);
