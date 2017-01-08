angular.module('Shopify')

.factory('validator', ['$http', function ($http) {
  var service = {};

  service.cleanProduct = function (product) {
    if (!product.options || !product.options.length) return product;
    product.options = product.options.filter(function (o) {
      if (!o.name && (!o.values || !o.values.length)) return false;
      return true;
    });
    return product;
  };

  service.validateProduct = function (product) {
    if (!product.options || !product.options.length) return;
    var dirty = false;

    product.options.forEach(function (option) {
      if (!option.name && option.values && option.values.length) dirty = true;
    });

    if (dirty) throw 'Please add a name to each of your variant options.';
  };

  return service;
}]);
