angular.module('Shopify')

.controller('EditProductController', ['$scope', 'apiService', 'editableProduct', function ($scope, apiService, editableProduct) {
  if (editableProduct) {
    $scope.product = editableProduct;
    $scope.pageTitle = angular.copy(editableProduct.title) || 'Edit Product';
  } else {
    $scope.product = {
      title         : 'Daniel T-shirt',
      description   : 'Best t-shirt in the world!',
      price         : 22.00,
      originalPrice : 29.99,
      sku           : 'SKU-99',
      barcode       : '11-BARCODE'
    };
  }

  $scope.saveProduct = function (product) {
    apiService.saveProduct(product)
    .then(function (response) {
      alertify.success('Your product has been saved');
    })
    .catch(function (err) {
      console.error(err);
      alertify.error('There was an error with your request');
    })
  };
}]);
