const mongoose = require('mongoose');
var catagory=["vagan","non-vegan"]
// Define User attributes
const foodSchema = mongoose.Schema({
  food_name:{type: String, required: true},
  price:{type:Number,required:true},
  ingredient:{type:Array,required:true},
  status:  {type: String, required: true, default: "unordered"},
  rating:{type:Number,required:true,default:0},
  description:{type:String,required:true},
  catagory:{type:catagory,required:true},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()}
});

// Export User model
module.exports = mongoose.model('Food',foodSchema);