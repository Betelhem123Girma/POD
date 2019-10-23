const mongoose = require('mongoose');
var catagory=["vagan","non-vegan"]
// Define User attributes
const MenuItemSchema = mongoose.Schema({
  menuItem_name:{type: String, required: true},
  price:{type:Number,required:true},
  ingredient:{type:Array,required:true},
  ordered:  {type:Boolean, required: true, default: false},
  rating:{type:Number,required:true,default:0},
  description:{type:String,required:true},
  catagory:{type:String,required:true},
  payed:{type:Boolean,required:true,default:false},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()}
});

// Export User model
module.exports = mongoose.model('MenuItem',MenuItemSchema);