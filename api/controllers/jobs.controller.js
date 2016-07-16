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
