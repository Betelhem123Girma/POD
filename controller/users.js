// Load Module Dependencies
const events = require('events');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get User DAL
const UserDal = require('../dal/user');

// Get Config file
const config = require('../config');

/*
* Create User
*
*  1. Create User
*  2. Respond
*/
exports.createUser = function createUser(req, res, next) {
  let workflow = new events.EventEmitter();

  workflow.on('validateData', function validateData() {
    // Validate User Data
    req.checkBody({
      email: {
        notEmpty: true,
        errorMessage: 'Invalid email'
      },
      password: {
        notEmpty: true,
        errorMessage: 'Invalid password'
      },
    });

    let validationErrors = req.validationErrors();

    if(validationErrors) {
      res.status(400);
      res.json(validationErrors);
    } else {
      // On success emit the createUser event
      workflow.emit('createUser');
    }
  });

  workflow.on('createUser', function createUser() {
    UserDal.create(req.body, function callback(err, user) {
      if (err) {
        return next(err);
      }

      // On Success respond with new user
      workflow.emit('respond', user);
    });
  });

  workflow.on('respond', function respond(user) {
    res.status(201);
    res.json(user);
  });

  workflow.emit('validateData');
};
/*
* Login User
*
*  1. Find User by email
*  2. Check User password match
*  3. Respond
*/

exports.login = (req, res) => {
  const {email, password} = req.body;

  UserDal.find({email,password})
      .then(found => {
        if (!found) {
          res.json({
            error: true,
            message: `Invalid email or password`, 
            status: 400
          }).status(400);
        } 
        const token = jwt.sign(
          {
            email: req.email,
            userId: req._id
          },
          config.JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
          res.json({
            message: 'Welcome!',
            token:token
          
          })
        }
      )
      .catch(error => res.json({error: true, message: error}));
}
