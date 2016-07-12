var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.set('port', 3000);



app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended : false }));


var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log("beAnz is just chillin on "+ port);
});
