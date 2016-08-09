require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
// var router = express.Router();
// require('angular-background-image');
var bodyParser = require('body-parser');
var routes = require('./api/routes');


app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended : false }));


app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log("beAnz is just chillin on "+ port);
});
