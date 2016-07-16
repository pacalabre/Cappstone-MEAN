var express = require('express');
var router = express.Router();
var ctrlJobs = require('../controllers/jobs.controller.js');


router
  .route('/jobs')
  .get(ctrlJobs.jobsGetAll);

module.exports = router;
