angular.module('Shopify')

.controller('HomeController', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.user = {
    email: '',
    password: '',
    storeName: ''
  };

  $scope.emailSignup = function (email) {
    $scope.user.email = email;
    $scope.signupModalOpened = true;

    $timeout(function () {
      if (email) $('#userPassword').focus();
      else $('#userEmail').focus();
    })
  };
}]);
