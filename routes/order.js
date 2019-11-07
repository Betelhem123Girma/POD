const express=require('express')
const router=express.Router()
const Order=require('../controller/orders')
const checkAuth = require('../lib/check_auth');
/**
 * @api {user} /orders/add  Add orders
 * @apiName AddOrders
 * @apiGroup Order
 * @apiVersion 0.0.1
 */
router.post('/add',checkAuth,Order.addOrder)
/**
 * @api {user} /orders/    Get all orders
 * @apiName GetOrders
 * @apiGroup Order
 * @apiVersion 0.0.1
 */
router.get('/',checkAuth,Order.findOrders)

// router.get('/:userId',checkAuth,Order.findOrdersWithUserId)
/**
 * @api {delete} /orders/delete/:orderId  Delete order
 * @apiName DeleteOrder
 * @apiGroup Order
 * @apiVersion 0.0.1
 */
router.delete('/delete/:orderId',checkAuth,Order.deleteOrder)
module.exports=router
