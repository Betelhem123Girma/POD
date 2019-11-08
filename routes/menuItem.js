var router=require('express').Router()
var menuItemController=require('../controller/menuItem');
const checkAuth = require('../lib/check_auth');
/**
 * @api {get} /pod/menuItems    Get all menuItem with specific catagory
 * @apiName GetMenuItems
 * @apiGroup MenuItems
 * @apiVersion 0.0.1
 */
router.get('/menuItems',checkAuth,menuItemController.findMenuItems)
/**
 * @api {user} /pod/addMenuItems  Add menuItems
 * @apiName AddMenuItems
 * @apiGroup MenuItems
 * @apiVersion 0.0.1
 */
router.post('/addMenuItems',checkAuth,menuItemController.createMenuItem)
/**
 * @api {user} /pod/searchMenuItem    Search for menuItem
 * @apiName SearchMenuItems
 * @apiGroup MenuItems
 * @apiVersion 0.0.1
 */
router.get('/searchMenuItem',checkAuth,checkAuth,menuItemController.searchMenuItem)

// router.patch('/orderMenuItem',menuItemController.orderMenuItem)
// router.patch('/pay',menuItemController.payMenuItem)
// router.get('/searchMenuItem',menuItemController.searchMenuItem)
module.exports=router