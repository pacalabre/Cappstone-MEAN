
angular.module('JobsApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
  .when('/' ,  {
    templateUrl: '../views/templates/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  })
  .when('/dashboard' ,  {
    templateUrl : '../angular-app/job-list/dashboard.html',
    controller : JobsController,
    controllerAs: 'vm'
  })
 .when('/dashboard/jobs' ,  {
    templateUrl : '../angular-app/job-display/job.html',
    controller : JobController,
    controllerAs: 'vm'
  })

}
