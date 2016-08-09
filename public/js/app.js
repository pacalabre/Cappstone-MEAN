
angular.module('JobsApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
  .when('/' ,  {
    templateUrl: '../views/templates/home.html',
    css: '../css/module-index.css',
    controllerAs: 'vm'
  })
  .when('/dashboard' ,  {
    templateUrl : '../angular-app/job-list/dashboard.html',
    css: '../css/module-dashboard.css',
    controller : JobsController,
    controllerAs: 'vm'
  })
 .when('/dashboard/job/:id' ,  {
    templateUrl : '../angular-app/job-display/job.html',
    controller : JobController,
    controllerAs: 'vm'
  })

}
