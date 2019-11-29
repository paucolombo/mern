var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SchemaItinerary = new Schema({
    idCity: {
      type: String,
      required: true,
      unique: false
    },  
    profilePicture: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
  }, 
  price: {
    type: Number,
    required:true
},
title: {
    type: Number,
    required:true
},
duration: {
    type: Number,
    required:true
},
hashTags: {
    type: Array,
}


  });
  var SchemaModelItinerary = mongoose.model('itinerary', SchemaItinerary );
  
  
module.exports = SchemaModelItinerary;
