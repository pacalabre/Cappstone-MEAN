
angular.module('JobsApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider.when('/' ,  {
    templateUrl : '../views/templates/home.html',
    controller : 'HomeCtrl',
    controllerAs: 'vm'
  })
  $routeProvider.when('/dashboard' ,  {
    templateUrl : '../views/templates/dashboard.html',
    controller : 'DashCtrl',
    controllerAs: 'vm'
  })
 $routeProvider.when('/dashboard/jobs' ,  {
    templateUrl : '../views/templates/job.html',
    controller : 'JobCtrl',
    controllerAs: 'vm'
  })

}
