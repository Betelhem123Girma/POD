'use strict';
const orderDal=require('../dal/order')
const userDal=require('../dal/user')
const menuItemDal=require('../dal/menuItem')
const validator=require('../validator/validator')
var result=require('../util/res')
const orderModel=require('../model/order')
   exports.findOrder=(req,res)=>{
    userDal.findById(req.body.userId)
    .then(found=>{
        if(!found){
            return res.status(404).json({
                message:"user not found"
            })
        }
        // return userDal.findAllergies(req.body.userId)
    }
        )
     orderDal.findByUserId({user:req.params.userId})
     .then(found=>{
       if(!found){
          return res.status(404).json({
            message:"order not found"
          })
       }
       else{
         order=found
         res.json(order)
       }

     })
   }   
    exports.findOrders=(req,res)=>{
    
        return orderDal.findOrders()
           .then(orders=>{
               result.data(orders,res)
           })
    } 
    ////creating orders
    
    exports.addOrder = (req, res, next) => {
        userDal.findById(req.body.userId)
        .then(found=>{
            if(!found){
                return res.status(404).json({
                    message:"user not found"
                })
            }
            // return userDal.findAllergies(req.body.userId)
        }
            )
        menuItemDal.findMenuItemById(req.body.menuItemId)
          .then(menuItem => {
            if (!menuItem) {
              return res.status(404).json({
                message: "Product not found"
              });
            }
        
        
            const order = new orderModel({
              user:req.body.userId,
              quantity: req.body.quantity,
              menuItems: req.body.menuItemId,
              order_name:req.body.order_name,
              users_allergies:userDal.findAllergies(req.body.userId)
            });
            return order.save()
          })
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Order stored",
              createdOrder: {
                _id: result._id,
                menuItems: result.menuItems,
                quantity: result.quantity,
                allergies:result.allergies

              }
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
      }
      //Deleting orders
      exports.deleteOrder = (req, res, next) => {
          orderDal.findOrderById({_id:req.params.orderId})
          .then(found=>{
              if(!found){
                  res.json({
                      message:"Order doesnt exist"
                  })
              }
          })
        orderDal.deleteOrder({ _id: req.params.orderId })
          .exec()
          .then(result => {
            res.status(200).json({
              message: "Order deleted",
              request: {
                type: "POST",
                url: "http://localhost:3000/orders",
                body: { productId: "ID", quantity: "Number" }
              }
            });
          })
          .catch(err => {
            res.status(500).json({
              error: err
            });
          });
      };
  