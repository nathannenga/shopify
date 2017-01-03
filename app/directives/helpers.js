angular.module('Shopify')
.directive('sendTo', [function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attr) {
      elem.bind('click', function (e) {
        if (attr.sendTo) window.location = attr.sendTo;
      })
    }
  }
}])

.directive('inputPill', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'A',
    link: function (scope, elem, attr) {
      $rootScope.$on('clear input pill', function (e, data) {
        if (data.optionIndex == attr.optionIndex) scope.pillInput = '';
      });
    }
  }
}]);
