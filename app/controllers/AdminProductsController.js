angular.module('Shopify')

.controller('AdminProductsController', ['$scope', 'apiService', 'userProducts', function ($scope, apiService, userProducts) {
  $scope.products = userProducts;
}]);
