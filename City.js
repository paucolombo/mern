var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const schemaCity = new Schema({
    city:  String,
    country: String,
  });

export default schemaCity;