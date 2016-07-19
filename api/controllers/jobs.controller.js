var mongoose = require('mongoose');
var Job = mongoose.model('Job');

module.exports.jobsGetAll = function(req, res) {
  Job
    .find()
    .exec(function(err, jobs) {
      if(err) {
        console.log("error finding jobs");
        res
          .status(500)
          .json(err)
      } else {
      console.log("Found Jobs", jobs.length);
      res
        .json(jobs);
      }
    });
}

module.exports.jobsGetOne = function(req, res) {
  var jobId = req.params.jobId;

  Job
    .findById(jobId)
    .exec(function(err, doc){
      var response = {
        status : 200,
        message : doc
      };
      if(err){
        console.log("Error finding job. Error: ");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        response.status = 404;
        response.message = ({
          "message" : "Job ID not found."
        })
      }
      res
        .status(response.status)
        .json(response.message);
    })
}
