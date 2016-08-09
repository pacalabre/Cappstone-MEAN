angular.module('JobsApp').controller('JobsController', JobsController);

function JobsController($http, jobDataFactory) {
  var vm = this;
  vm.myname = "Paul";

  vm.title = 'MEAN Hotel App';
  jobDataFactory.jobList().then(function(response){
    console.log(response.data);
    vm.jobs = response.data;
  })


  vm.addJob = function() {
    var postData = {
      position: vm.position,
      company: vm.company,
      description: vm.description,
      salary: vm.salary,
      rating: vm.rating,
      location: vm.location
    }
    if(vm.myForm.$valid) {
      jobDataFactory.postJob(postData).then(function(response){
        if(response.status === 200) {
          $route.reload();
        }
      }).catch(function(error){
        console.log(error);
      })
    } else {
      vm.isSubmitted = true;
    }
  }

}


