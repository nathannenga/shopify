angular.module('Shopify')
.directive('imageCloseup', ['imageService', '$rootScope', function (imageService, $rootScope) {
  return {
    restrict: 'E',
    templateUrl: '../templates/image-closeup.html',
    link: function (scope, elem, attrs) {
      $rootScope.$on('focus image', function (e, data) {
        scope.activeImage = data;
      });

      scope.closeModal = function () {
        scope.activeImage = null;
        $('body').removeClass('hidden');
        return true;
      };

      scope.removeImage = function (image) {
        $rootScope.$emit('remove image', image._id);
        scope.closeModal();
      };

      $(document).keyup(function (e) {
        if (e.keyCode == 27) {
          scope.closeModal();
          scope.$digest();
        }
      });
    }
  }
}]);
