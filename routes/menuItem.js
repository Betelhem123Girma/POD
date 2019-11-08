var router=require('express').Router()
var menuItemController=require('../controller/menuItem');
const checkAuth = require('../lib/check_auth');
/**
 * @api {get} /pod/menuItems    Get all menuItem with specific catagory
 * @apiName GetMenuItems
 * @apiGroup MenuItems
 * @apiVersion 0.0.1
 *@apiParamExample {json} Request
 * {

"catagory":"Dessert"
}
 *     {
        "ingredient": [],
        "rating": null,
        "payed": false,
        "date_created": "2019-11-07T23:18:45.871Z",
        "date_modified": "2019-11-07T23:18:45.871Z",
        "_id": "5dc4a6551bdd5a00241e1018",
        "menuItem_name": "Black forest",
        "price": 50,
        "description": "This is a nice dessert",
        "catagory": "Dessert",
        "__v": 0
    }
 */
router.get('/menuItems',checkAuth,menuItemController.findMenuItems)
/**
 * @api {user} /pod/addMenuItems  Add menuItems
 * @apiName AddMenuItems
 * @apiGroup MenuItems
 * @apiVersion 0.0.1
 * @apiSuccessExample {json} Success Response
 * {
    "ingredient": [],
    "rating": 3,
    "payed": false,
    "date_created": "2019-11-08T05:35:17.300Z",
    "date_modified": "2019-11-08T05:35:17.300Z",
    "_id": "5dc4fe955a98e200242666f1",
    "menuItem_name": "Black forest",
    "price": 50,
    "description": "This is a nice dessert",
    "catagory": "Dessert",
    "__v": 0
}
*@apiParamExample  {json} Request
{
"menuItem_name":"Black forest",
"price":50,
"ingredient":[],
"rating":3,
"description":"This is a nice dessert",
"catagory":"Dessert"
}
 */
router.post('/addMenuItems',checkAuth,menuItemController.createMenuItem)
/**
 * @api {user} /pod/searchMenuItem    Search for menuItem
 * @apiName SearchMenuItems
 * @apiGroup MenuItems
 * @apiVersion 0.0.1
 * 
 * 
 */
router.get('/searchMenuItem',checkAuth,menuItemController.searchMenuItem)

// router.patch('/orderMenuItem',menuItemController.orderMenuItem)
// router.patch('/pay',menuItemController.payMenuItem)
// router.get('/searchMenuItem',menuItemController.searchMenuItem)
/**
 * @api {patch} /pod/rate    Rate menuItem
 * @apiName RateMenuItems
 * @apiGroup MenuItems
 * @apiVersion 0.0.1
 * 
 * 
 */
router.patch('/rate',checkAuth,menuItemController.rateMenuItem)
module.exports=router