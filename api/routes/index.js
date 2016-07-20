var express = require('express');
var router = express.Router();
var ctrlJobs = require('../controllers/jobs.controller.js');


router
  .route('/jobs')
  .get(ctrlJobs.jobsGetAll)
  .post(ctrlJobs.jobsAddOne);

router
  .route('/jobs/:jobId')
  .get(ctrlJobs.jobsGetOne)
  .delete(ctrlJobs.jobsDeleteOne);



module.exports = router;
