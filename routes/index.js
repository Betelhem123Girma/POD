// Load Module Dependencies
var express = require('express');

var userRouter = require('./user');

// Export Router Initializer
module.exports = function iniRouter(app) {
	
	// User Endpoint
	app.use('/users', userRouter);

};