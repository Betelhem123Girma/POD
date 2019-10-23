var menuItemModel=require('../model/menuItem')

// exports.findMenuItems=(query,cb)=>{
//     // menuItemModel.find(query).exec(function(err,menuItem) {
//     //     if (err) {
//     //       return cb(err);
//     //     }
//     //     cb(null, menuItem || {});
//     //   });
//     console.log("I am in Dal")
//     };
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
        
            cb( data);
        });
  
  };