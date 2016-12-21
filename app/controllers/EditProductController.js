angular.module('Shopify')

.controller('EditProductController', ['$scope', 'apiService', 'editableProduct', '$rootScope',
function ($scope, apiService, editableProduct, $rootScope) {

  if (editableProduct) {
    $scope.product = editableProduct[0];
    $scope.pageTitle = angular.copy(editableProduct[0].title) || 'Edit Product';
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

  $scope.openImage = function (image) {
    $rootScope.$emit('focus image', image);
    $('body').addClass('hidden');
  };

  $rootScope.$on('image added', function (e, image) {
    addToImageArray(image);
  });

  $rootScope.$on('remove image', function (e, imageId) {
    $scope.product.images = $scope.product.images.filter(function (image) {
      if (image._id === imageId) return false;
      return true;
    })
    alertify.log('Please click the save button to update changes');
  });

  function addToImageArray (image) {
    if (!$scope.product) $scope.product = {};
    if (!$scope.product.images || !$scope.product.images.length) $scope.product.images = [];

    $scope.product.images.push(image);
  };
}]);
