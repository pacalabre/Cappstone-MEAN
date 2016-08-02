angular.module('JobsApp').controller('JobsController', JobsController);

function JobsController(jobDataFactory) {
  var vm = this;
  vm.myname = "Paul";
  vm.title = 'MEAN Hotel App';
  jobDataFactory.jobList().then(function(response){
    console.log(response.data);
    vm.jobs = response.data;
  })
}
