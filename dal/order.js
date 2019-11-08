var Order=require('../model/order')
exports.addOrder=function addOrder(orderData,cb){
    let now=new Date()
   
    orderData.order_time = now.toISOString();
    
    let orderModel=new Order(orderData)
   
    orderModel.save(function saveOrder(err, data) {
        if (err) {
          return cb(err);
        }
       cb(null,data)
       
      });
}
exports.deleteOrder=query=>Order.deleteMany(query);
exports.findOrders = query => Order.find(query).exec();
exports.findOrderById=query=>Order.findById(query);
exports.findByUserId=query=>Order.findById(query);

// exports.getOrders=(res,req)=>{
//     orderModel.getOrders((err,data)=>{
//         if(err){
//             return res.err;
            
            
//         }
//         Order.find()


//     })
// }
        
exports.get = function get(query, cb) {
    console.log("getting Order ", query);
  
    User.findOne(query).exec(function(err, order) {
      if (err) {
        return cb(err);
      }
      cb(null, order || {});
    });
  };
         

