angular.module('Shopify')

.factory('apiService', ['$http', function ($http) {
  var service = {};

  service.saveUserInfo = function (user) {
    return $http.put('/api/user-info', user);
  };

  return service;
}]);
