angular.module('Shopify')

.controller('MenuController', ['$scope', '$timeout', '$state', function ($scope, $timeout, $state) {

  $timeout(function () {
    if ($state.current.name.indexOf('product') > -1) {
      $scope.activeTab = 'products';
    } else {
      $scope.activeTab = $state.current.name;
    }
  }, 100);

  $scope.activateTab = function (tab) {
    $scope.activeTab = tab;
  };
}]);
