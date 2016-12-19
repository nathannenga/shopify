angular.module('Shopify')
.directive('fileread', ['imageService', '$rootScope', function (imageService, $rootScope) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        console.log('changed!')

        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          var fileread = loadEvent.target.result;

          console.log(elem);

          var tempArray = elem[0].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];

          imageService.uploadImage(fileread, fileName)
          .then(function (response) {
            $rootScope.$emit('image added', response.data);
            alertify.success('Image successfully uploaded');
          })
          .catch(function (err) {
            console.error(err);
            alertify.error('There was an error uploading your image');
          })
        };

        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
}]);
