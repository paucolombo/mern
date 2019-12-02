var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SchemaActivity = new Schema({
    title: {
      type: String,
      required: true,
      unique: true
    },  
    city: {
      type: String,
      required: true
    }

  });
  var SchemaModelActivity = mongoose.model('activity', SchemaActivity );
  
  
module.exports = SchemaModelActivity;
