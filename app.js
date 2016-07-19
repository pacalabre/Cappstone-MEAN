require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
// var router = express.Router();
var bodyParser = require('body-parser');
var routes = require('./api/routes');


app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended : false }));


app.get('/', function(req, res) {
  console.log("got the homepage");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/dashboard', function(req, res) {
  console.log("got the dashboard");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'dashboard.html'));
})

app.get('/dashboard/:id', function(req, res) {
  console.log("got the job page");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'job.html'));
})

app.use('/api', routes);


var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log("beAnz is just chillin on "+ port);
});
