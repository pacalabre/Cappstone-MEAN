angular.module('JobsApp').controller('JobController', JobController);

function JobController($routeParams,jobDataFactory) {
  var vm = this;
  vm.myname = "Paul";
  var vm = this;
  var id = $routeParams.id;
  jobDataFactory.jobDisplay(id).then(function(response) {
    vm.job = response.data;
  })
}
