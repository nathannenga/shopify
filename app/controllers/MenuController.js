angular.module('Shopify')

.controller('MenuController', ['$scope', '$timeout', '$state', function ($scope, $timeout, $state) {

  $timeout(function () {
    $scope.activeTab = $state.current.name;
  });

  $scope.activateTab = function (tab) {
    $scope.activeTab = tab;
  };
}]);
