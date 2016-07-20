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
    .exec(function(err, doc) {
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

//Add One

module.exports.jobsAddOne = function(req, res) {
  Job
    .create({
      position : req.body.position,
      company : req.body.company,
      rating :  req.body.rating,
      description :  req.body.description,
      salary :  req.body.salary,
      location : req.body.location,
      contacts : {
        contact1 : {
          name : req.body.name1,
          email : req.body.email1,
          number : req.body.number1,
          relationship : req.body.relationship1
        },
        contact2 : {
          name : req.body.name2,
          email : req.body.email2,
          number : req.body.number2,
          relationship : req.body.relationship2
        }
      },
      events :  {
        type : req.body.eventtype,
        location : req.body.eventlocation,
        date : req.body.date,
        time : req.body.time,
        sociallink : req.body.social
      },
      notes :  {
          note : req.body.notetype
        }
      }, function(err, job) {
        if(err) {
          console.log("error creating J-O-B");
          res
            .status(400)
            .json(err);
        } else {
          console.log("job created", job);
          res
            .status(201)
            json(job);
        }

    })
}
//Update One
//Delete One
