
// Get Post model
const Food = require('../model/food');

/**
 * create a new post.
 *
 * @desc  creates a new post and saves it in the database
 *
 * @param {Object}   postData  Data for the Post to create
 * @param {Function} cb     Callback for once saving is complete
 */
exports.create = function create(foodItemData, cb) {
  console.log('creating a new foodItem');
  // Create Post
  var now = new Date();
  foodItemData.date_created = now.toISOString();
  foodItemData.date_modified = now.toISOString();

  var foodItemModel = new Food(foodItemData);

  foodItemModel.save(function saveFoodItem(err, data) {
      if (err) {
          return cb(err);
      }
      exports.get({_id: data._id}, function (err, food) {
          if (err) {
              return cb(err);
          }
          cb(null, food);
      });
  });
};

/**
 * get a Post.
 *
 * @desc get a Post with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  console.log('getting FoodItem ', query);

  Food
      .findOne(query)
      .exec(function (err, food) {
          if (err) {
              return cb(err);
          }
          cb(null, food || {});
      });
};

/**
 *  search the collection of posts
 *
 *  @desc get a collection of posts form db
 *
 *  @param {Object} query Query Object
 *  @param {Function} cb Callback for once the fetch is complete
 */
exports.search = function search(options, cb){
    console.log('Searching a collection of foodItems');

    Food.find(options.filter, options.fields) 
        .sort(options.sort)
        .limit(options.limit)
        .skip(options.limit * (options.page - 1))
        .exec(function searchfoodItem(err, foods) {
            if(err) {
                return cb(err);
            }
            return cb(null, foods);
        })
}
