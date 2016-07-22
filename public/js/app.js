
angular.module('JobsApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider.when('/' ,  {
    templateUrl : '../views/templates/home.html',
    controller : 'HomeCtrl',
    controllerAs: 'vm'
  })
}
