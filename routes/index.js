// Load Module Dependencies
var express = require('express');

var userRouter = require('./user');
var foodRouter=require('./food')
var orderRouter=require('./order')
var menuItemRouter=require('./menuItem')
// Export Router Initializer
module.exports = function iniRouter(app) {
	
	// User Endpoint
	app.use('/users', userRouter)
	app.use('/foods',foodRouter)
	app.use('/orders',orderRouter)
	app.use('/pod',menuItemRouter)

};