angular.module('Shopify', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: '/templates/products.html'
      })
      .state('orders', {
        url: '/orders',
        templateUrl: '/templates/orders.html'
      })
});
