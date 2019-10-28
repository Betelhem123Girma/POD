var router=require('express').Router()
var menuItemController=require('../controller/menuItem');
const checkAuth = require('../lib/check_auth');
router.get('/menuItems',menuItemController.findMenuItems)
router.post('/addMenuItems',menuItemController.createMenuItem)
router.get('/searchMenuItem',checkAuth,menuItemController.searchMenuItem)

// router.patch('/orderMenuItem',menuItemController.orderMenuItem)
// router.patch('/pay',menuItemController.payMenuItem)
// router.get('/searchMenuItem',menuItemController.searchMenuItem)
module.exports=router