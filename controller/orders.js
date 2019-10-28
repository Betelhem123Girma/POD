const orderDal=require('../dal/order')
var result=require('../util/res')
    exports.addOrder=(req,res,next)=> {
        orderDal.addOrder(req.body, function callback(err, order) {
        
            if (err) {
                return next(err);
            }

            // On Success emit create profile event
            res.json(order);
        });
  

    
    }  
        
    exports.findOrders=(req,res)=>{
    
        return orderDal.findOrders()
           .then(orders=>{
               result.data(orders,res)
           })
    } 