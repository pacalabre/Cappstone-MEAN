angular.module('JobsApp').controller('JobsController', JobsController);

function JobsController(jobDataFactory) {
  var vm = this;
  vm.myname = "Paul";
  var vm = this;
  vm.title = 'MEAN Hotel App';
  jobDataFactory.jobList().then(function(response){
    console.log(response);
    vm.job = response.data;
  })
}
