var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SchemaCity = new Schema({
    city:  String,
    country: String,
  });
  var SchemaModel = mongoose.model('cities', SchemaCity );
  
module.exports = SchemaModel;

//export const mongooseCities = mongoose.model('city', SchemaCity);