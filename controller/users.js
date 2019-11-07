// Load Module Dependencies
const events = require('events');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const result = require('../util/res');
// Get User DAL
const UserDal = require('../dal/user');

// Get Config file
const config = require('../config');
const validator=require('../validator/user-validator')
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
  let email, password, user;
  validator.hasLoginFields(req)
      .then(body => {
          email = body.email;
          password = body.password;
          return UserDal.findOne({email});
      })
      .then(found => {
          if (!found) {
              return Promise.reject(
                  result.reject(`Invalid username or password`)
              );
          } else {
              user = found;
              return bcrypt.compare(password, user.password);
          }
      })
      .then(valid => {
          if (valid) {
            const token = jwt.sign(
                    {
                      email: user.email,
                      userId: user._id
                    },
                    config.JWT_KEY,
                    {
                      expiresIn: "1h"
                    }
                  );
                  return token
          } else {
              return Promise.reject(
                  result.reject(`Invalid username or password`)
              );
          }
      })
      .then(token => {
          result.data({token, user}, res);
      })
      .catch(reject => result.errorReject(reject, res));
};
// exports.login = (req, res) => {
//   const {email, password} = req.body;

//   UserDal.find({email,password})
//   .then (user=>{
//     if(!user){
//       console.log("user not found")
//       res.json({
        
//         error: true,
//         message: "Invaild password or username", 
//         status: 400
//       }).status(400);
//     }
//     const token = jwt.sign(
//       {
//         email: user.email,
//         userId: user._id
//       },
//       config.JWT_KEY,
//       {
//         expiresIn: "1h"
//       }
//     );
//     res.json({
//       message:"Welcome to home",
//       userId:user._id,
//       token:token
//     })
//   })}


