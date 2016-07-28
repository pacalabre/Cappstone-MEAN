angular.module('JobsApp').controller('JobController', JobController);

function JobController($routeParams,jobDataFactory) {
  var vm = this;
  var id = $routeParams.id;
  jobDataFactory.hotelDisplay(id).then(function(response) {
    vm.job = response.data;
  })
}
