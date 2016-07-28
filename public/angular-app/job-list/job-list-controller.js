angular.module('JobsApp').controller('JobsController', JobsController);

function JobsController(jobDataFactory) {
  var vm = this;
  vm.title = 'MEAN Hotel App';
  jobDataFactory.hotelList().then(function(response){
    console.log(response);
    vm.job = response.data;
  })
}
