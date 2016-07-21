angular.module('JobsApp', ['JobsController'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/templates/home.html',
      controller: 'HomeCtrl'
  })
}])
