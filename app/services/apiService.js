angular.module('Shopify')

.factory('apiService', ['$http', function ($http) {
  var service = {};

  service.saveUserInfo = function (user) {
    return $http.put('/api/user-info', user);
  };

  service.saveProduct = function (product) {
    if (product._id) return $http.put('/api/product/' + product._id, product);
    else return $http.post('/api/product', product);
  };

  service.getUserProducts = function () {
    return $http.get('/api/user-products');
  };

  service.getEditableProduct = function (productId) {
    return $http.get('/api/product/' + productId);
  };

  return service;
}]);
