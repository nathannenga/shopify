angular.module('Shopify')

.controller('EditProductController', ['$scope', 'apiService', 'editableProduct', '$rootScope',
function ($scope, apiService, editableProduct, $rootScope) {

  $scope.variantText = 'Add variant';
  var optionBlueprint = {
    name: null,
    values: []
  };

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

  $scope.toggleVariants = function () {
    $scope.variantsOpened = !$scope.variantsOpened;
    if ($scope.variantsOpened) openVariants();
    else closeVariants();
  };

  function openVariants () {
    $scope.variantText = 'Cancel';
    if (!$scope.product || !$scope.product.options) $scope.product.options = [angular.copy(optionBlueprint)];
  };

  function closeVariants () {
    $scope.variantText = 'Add variant';
  };

  $scope.pillInputChange = function (val, optionIndex) {
    if (!val) return;
    if (val[val.length - 1] !== ',') return;
    createPill(val.slice(0, -1), optionIndex);
    $rootScope.$emit('clear input pill', {optionIndex: optionIndex});
  };

  function createPill (val, optionIndex) {
    if ($scope.product.options[optionIndex].values.indexOf(val) < 0) $scope.product.options[optionIndex].values.push(val);
    else alertify.log('That value is already in your list.');
  };

  $scope.removePill = function (index, optionIndex) {
    $scope.product.options[optionIndex].values.splice(index, 1);
  };

  $scope.removeOption = function (index) {
    $scope.product.options.splice(index, 1);
    $rootScope.$emit('clear input pill', {optionIndex: index})
    if (!$scope.product.options.length) $scope.addOption();
  };

  $scope.addOption = function () {
    $scope.product.options.push(angular.copy(optionBlueprint));
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
