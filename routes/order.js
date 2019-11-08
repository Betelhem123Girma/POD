const express=require('express')
const router=express.Router()
const Order=require('../controller/orders')
const checkAuth = require('../lib/check_auth');
/**
 * @api {post} /orders/add  Add orders
 * @apiName AddOrders
 * @apiGroup Order
 * @apiVersion 0.0.1
 *

 */
router.post('/add',Order.addOrder)
/**
 * @api {get} /orders/    Get all orders
 * @apiName GetOrders
 * @apiGroup Order
 * @apiVersion 0.0.1
 * @apiParamExample  {json} Request
 * {

"userId":"5dc43d0f4856e30024bf8983",
"menuItemId":["5dc4a6551bdd5a00241e1018"],
"order_name":"Bety order",
"order_quantity":2
}
*@apiSuccessExample {json} Success Response
{
    "message": "Order stored",
    "createdOrder": {
        "_id": "5dc502cc5a98e200242666f2",
        "menuItems": [
            "5dc4a6551bdd5a00241e1018"
        ]
    }
}
 */
router.get('/',checkAuth,Order.findOrders)

// router.get('/:userId',checkAuth,Order.findOrdersWithUserId)
/**
 * @api {delete} /orders/delete/:orderId  Delete order
 * @apiName DeleteOrder
 * @apiGroup Order
 * @apiVersion 0.0.1
 * @apiSuccessExample  {json} Success Response
 * {
    "message": "Order deleted",
    "request": {
        "type": "POST",
        "url": "http://localhost:3000/orders",
        "body": {
            "productId": "ID",
            "quantity": "Number"
        }
    }
}
 */
router.delete('/delete/:orderId',checkAuth,Order.deleteOrder)
/**
 * @api {get} /orders/    Get all orders
 * @apiName GetOrders
 * @apiGroup Order
 * @apiVersion 0.0.1
 *
*@apiSuccessExample  {json} Success Response
 {
    "message": "Order stored",
    "createdOrder": {
        "_id": "5dc502cc5a98e200242666f2",
        "menuItems": [
            "5dc4a6551bdd5a00241e1018"
        ]
    }
}
 */
router.get('/find/:userId',checkAuth,Order.findOrder)
module.exports=router
