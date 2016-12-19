angular.module('Shopify')

.factory('imageService', ['$http', function ($http) {
  var service = {};

  service.uploadImage = function (imageData, fileName) {
    var imageExtension = imageData.split(';')[0].split('/');
    imageExtension = imageExtension[imageExtension.length - 1];

    var newImage = {
      imageName: fileName,
      imageBody: imageData,
      imageExtension: imageExtension
    };

    return $http.post('/api/new-image', newImage)
  };

  return service;
}]);
