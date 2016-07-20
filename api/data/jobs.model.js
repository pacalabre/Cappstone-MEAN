var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  contact1 : {
  name : String,
  email : String,
  number : String,
  relationship : String
  },
  contact2: {
  name : String,
  email : String,
  number : String,
  relationship : String
  }
})

var eventSchema = new mongoose.Schema({
  type : String,
  location : String,
  date : String,
  time : String,
  sociallink : String
})

var noteSchema = new mongoose.Schema({
    note : String,
    createdOn : {
      type : Date,
      "default" : Date.now
  }
})


var jobSchema = new mongoose.Schema({
  position: {
    type :  String,
    require :  true
  },
  company : {
    type :  String,
    require : true
  },
  rating : {
    type : Number,
    min : 1,
    max : 5
  },
  description : String,
  salary : String,
  location : String,
  contacts : [contactSchema],
  events : [eventSchema],
  notes : [noteSchema]
})

mongoose.model('Job', jobSchema);
