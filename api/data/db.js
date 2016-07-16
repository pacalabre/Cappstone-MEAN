var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/cappstone-test';
mongoose.connect(dburl);

mongoose.connection.on('connected',function() {
  console.log("mongoose connected to " + dburl);
});

mongoose.connection.on('disconnected',function() {
  console.log("mongoose disconnected");
});

mongoose.connection.on('error',function(err) {
  console.log("mongoose connection error: " + err);
});

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    console.log("mongoose disconnected through app termination(SIGINT)");
    process.exit(0);
  })
})

process.on('SIGTERM', function(){
  mongoose.connection.close(function(){
    console.log("mongoose disconnected through app termination(SIGTERM)");
    process.exit(0);
  })
})

process.once('SIGUSR2', function(){
  mongoose.connection.close(function(){
    console.log("mongoose disconnected through app termination(SIGUSR2)");
    process.kill(process.pid, 'SIGUSR2');
  })
})
