angular.module('Shopify')
.directive('imageCloseup', ['imageService', '$rootScope', function (imageService, $rootScope) {
  return {
    restrict: 'E',
    templateUrl: '../templates/image-closeup.html',
    link: function (scope, elem, attrs) {
      $rootScope.$on('focus image', function (e, data) {
        console.warn(data);
        scope.activeImage = data;
      });

      scope.closeModal = function () {
        scope.activeImage = null;
      };

      scope.removeImage = function (image) {
        $rootScope.$emit('remove image', image._id);
        scope.closeModal();
      }
    }
  }
}]);
