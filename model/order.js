//creating database 
const mongoose=require('mongoose')
const OrderSchema=mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User',required:true},
    menuItems: [{type: mongoose.SchemaTypes.ObjectId, ref: 'MenuItem',required:true}],
    order_name:{type:String,required:true},
    // order_time:{type:Date,required:true},
    order_quantity:{type:Number,default:1}
    

})
module.exports=mongoose.model('Order',OrderSchema)  