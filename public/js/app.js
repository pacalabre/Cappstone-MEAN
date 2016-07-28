
angular.module('JobsApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider.when('/' ,  {
    templateUrl : '../views/templates/home.html',
    controller : 'HomeCtrl',
    controllerAs: 'vm'
  })
  $routeProvider.when('/dashboard' ,  {
    templateUrl : '../angular-app/job-list/dashboard.html',
    controller : 'DashCtrl',
    controllerAs: 'vm'
  })
 $routeProvider.when('/dashboard/jobs' ,  {
    templateUrl : '../angular-app/job-display/job.html',
    controller : 'JobCtrl',
    controllerAs: 'vm'
  })

}
