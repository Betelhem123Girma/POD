// Load Modules
const bcrypt = require("bcrypt");

// Get User model
const User = require("../model/user");

/**
 * create a new user.
 *
 * @desc  creates a new user and saves it in the database
 *
 * @param {Object}   userData  Data for the User to create
 * @param {Function} cb     Callback for once saving is complete
 */
exports.create = function create(userData, cb) {
  console.log("creating a new User");

  // Hash Password
  bcrypt.hash(userData.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      // Create User
      let now = new Date();

      userData.date_created = now.toISOString();
      userData.date_modified = now.toISOString();
      userData.password = hash;

      let userModel = new User(userData);
      
      userModel.save(function saveUser(err, data) {
        if (err) {
          return cb(err);
        }
        exports.get({ _id: data._id }, function(err, user) {
          if (err) {
            return cb(err);
          }
          cb(null, user);
        });
      });
    }
  });
};

/**
 * get a User.
 *
 * @desc get a User with the given query from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  console.log("getting User ", query);

  User.findOne(query).exec(function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user || {});
  });
};
exports.findById=query=>User.findById(query);
exports.find = query => User.find(query).exec();
exports.findOne = query => User.findOne(query).exec();
exports.findAllergies=query=>(req,res)=>{
   user.where(query).fetchAll({withRelated:['allergies']})
   .then(function(allergies){
     allergies=allergies.toJSON()
     return allergies
   })
}
