const mongoose = require('mongoose');

// Define User attributes
const UserSchema = mongoose.Schema({
  first_name:{type: String, required: true},
  last_name:{type: String, required: true},
  email: {type: String, required: true, unique: true},
  password:  {type: String, required: true},
  allergies:{type:Array},
  role:  {type: String, required: true, default: "res_goer"},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()}
});

// Export User model
module.exports = mongoose.model('User', UserSchema);