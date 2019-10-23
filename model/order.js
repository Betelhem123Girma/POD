//creating database 
const mongoose=require('mongoose')
const OrderSchema=mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    foods: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Food'}],
    order_name:{type:String,required:true},
    order_time:{type:Date,required:true},
    order_quantity:{type:Number,required:true}
})
module.exports=mongoose.model('Order',OrderSchema)