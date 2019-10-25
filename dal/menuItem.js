var menuItemModel=require('../model/menuItem')


exports.findMenuItems = query => menuItemModel.find(query).exec();
exports.create = function create(foodItemData, cb) {
    console.log('creating a new foodItem');
    // Create Post
    var now = new Date();
    foodItemData.date_created = now.toISOString();
    foodItemData.date_modified = now.toISOString();
  
    var newMenuItemModel=new menuItemModel(foodItemData)
  
    newMenuItemModel.save(function saveFoodItem(err, data) {
        if (err) {
            return cb(err);
        }
        
            cb(null, data);
        });
  
  };
  exports.search = function search(options, cb){
    console.log('Searching a collection of foodItems');

    menuItemModel.find(options.filter, options.fields) 
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
exports.orderMenuItem=()=>{}