angular.module('Shopify')

.controller('HeaderController', ['$scope', '$state',
function ($scope, $state) {
  $scope.currState = $state;
  $scope.$watch('currState.current.name', function(newValue, oldValue) {
    switch (newValue) {
      case 'products':
        productsON()
        break;
      case 'orders':
        ordersON()
        break;
    }
  });

  function productsON () {
    $scope.headerCa = 'Add product';
    $scope.activeTab = 'products';
  };

  function ordersON () {
    $scope.headerCa = 'Create order';
    $scope.activeTab = 'orders';
  };

}]);
