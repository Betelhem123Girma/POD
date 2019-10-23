var router=require('express').Router()
var menuItemController=require('../controller/menuItem');
router.get('/menuItems',menuItemController.findMenuItems)
router.post('/addMenuItems',menuItemController.createFoodItem)
// router.patch('/orderMenuItem',menuItemController.orderMenuItem)
// router.patch('/pay',menuItemController.payMenuItem)
// router.get('/searchMenuItem',menuItemController.searchMenuItem)
module.exports=router