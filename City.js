var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SchemaCity = new Schema({
    city: {
      type: String,
      required: true,
      unique: true
    },  
    country: {
      type: String,
      required: true
    },
    img: {
      type: String,
  } 

  });
  var SchemaModel = mongoose.model('city', SchemaCity );
  
  
module.exports = SchemaModel;


//export const mongooseCities = mongoose.model('city', SchemaCity);