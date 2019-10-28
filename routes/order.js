const express=require('express')
const router=express.Router()
const Order=require('../controller/orders')
router.post('/add',Order.addOrder)
router.get('/',Order.findOrders)
module.exports=router
