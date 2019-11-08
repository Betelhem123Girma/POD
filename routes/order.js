const express=require('express')
const router=express.Router()
const Order=require('../controller/orders')
const checkAuth = require('../lib/check_auth');
/**
 * @api {post} /orders/add  Add orders
 * @apiName AddOrders
 * @apiGroup Order
 * @apiVersion 0.0.1
 */
router.post('/add',checkAuth,Order.addOrder)
/**
 * @api {get} /orders/    Get all orders
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
router.get('/find/:userId',checkAuth,Order.findOrder)
module.exports=router
