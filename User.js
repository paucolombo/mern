var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SchemaUser = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: false
  }

});
var SchemaModelUser = mongoose.model('user', SchemaUser);

module.exports = SchemaModelUser;