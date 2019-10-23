// const OrderDal=require('../dal/order')
// const events=require('events')
// // exports.getOrders=function getOrders(req,res,next){
// //     OrderDal.getOrders(function(err,orders){
// //         if(err){
// //             return next(err)
// //         }
// //         res.status(200)
// //         res.json({
            
// //             "result":  orders
// //         });

// //     })
// // }
// exports.addOrder=(req,res,next)=>{
//     // let workflow=new events.EventEmitter()
//     // workflow.on('validateData',function validateData(){
     
        
//        OrderDal.addOrder(req.body,(err,order)=>{
//            if(err){
//                return next(err)
//            }         
//            UserDal.get({ email: req.body.email }, function(err, order) {
//             if (err) {
//               return res.status(401).json({
//                 message: 'Auth Failed'
//               });
//             }
      
          
//           })}

// // exports.addOrder = (req, res) => {
// //     const {email, password} = req.body;
  
// //     UserDal.find({email})
// //         .then(found => {
// //           if (!found) {
// //             res.json({
// //               error: true,
// //               message: `Invalid email or password`,
// //               status: 400
// //             }).status(400);
// //           } else {
// //             res.json({
// //               message: 'Welcome!'
// //             })
// //           }
// //         })
// //         .catch(error => res.json({error: true, message: error}));
// //   }
  
