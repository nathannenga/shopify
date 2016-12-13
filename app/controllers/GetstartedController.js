angular.module('Shopify')

.controller('GetstartedController', ['$scope', 'apiService', function ($scope, apiService) {
  $scope.user = {
    firstName: 'Daniel',
    lastName: 'Falabella',
    address: {
      streetAddress: '43 North Burger Way',
      number: '',
      city: 'Ogden',
      zip: 86642,
      country: 'USA',
      state: 'Utah'
    },
    phoneNumber: 8883128752,
    websiteUrl: 'google.com'
  }

  $scope.saveData = function (user) {
    apiService.saveUserInfo(user)
    .then(function (response) {
      console.warn(response);
    })
    .catch(function (err) {
      console.error(err);
    })
  };
}]);
