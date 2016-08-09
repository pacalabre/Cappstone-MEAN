angular.module('JobsApp').factory('jobDataFactory', jobDataFactory);

function jobDataFactory($http) {
  return {
    jobList: jobList,
    jobDisplay: jobDisplay,
    postJob: postJob
  };

  function jobList() {
    return $http.get('/api/jobs').then(complete).catch(failed);
  }

  function jobDisplay(id) {
    return $http.get('/api/jobs/'+ id).then(complete).catch(failed);
  }

  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }

  function postJob(job) {
    return $http.post('/api/jobs', job)
    .then(complete).catch(failed);
  }
}
