angular.module('Shopify', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('products', {
        url: '/products'
        // templateUrl: 'products.html'
      })
      .state('orders', {
        url: '/orders'
        // templateUrl: 'orders.html'
      })
});
