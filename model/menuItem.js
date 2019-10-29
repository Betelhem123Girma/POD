const mongoose = require('mongoose');

// Define User attributes
const MenuItemSchema = mongoose.Schema({
  menuItem_name:{type: String, required: true},
  price:{type:Number,required:true},
  order:{type:mongoose.SchemaTypes.ObjectId,ref:'Order'},
  ingredient:{type:Array,required:true},
 
  rating:{type:Number,required:true,default:0},
  description:{type:String,required:true},
  catagory:{type:String,required:true},
  payed:{type:Boolean,required:true,default:false},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()}
});

// Export User model
module.exports = mongoose.model('MenuItem',MenuItemSchema);