const express=require('express')
const router=express.Router()
const Order=require('../controller/orders')
const checkAuth = require('../lib/check_auth');
router.post('/add',checkAuth,Order.addOrder)
router.get('/',checkAuth,Order.findOrders)
// router.get('/:userId',checkAuth,Order.findOrdersWithUserId)
router.delete('/delete/:orderId',checkAuth,Order.deleteOrder)
module.exports=router
