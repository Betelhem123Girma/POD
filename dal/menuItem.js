var menuItemModel=require('../model/menuItem')

exports.update = menuItemModel => menuItemModel.save();
exports.findMenuItems = query => menuItemModel.find(query).exec();
exports.findMenuItemById=query=>menuItemModel.findById(query);
exports.create = function create(menuItemData, cb) {
    console.log('creating a new foodItem');
    // Create Post
    var now = new Date();
    menuItemData.date_created = now.toISOString();
    menuItemData.date_modified = now.toISOString();
  
    var newMenuItemModel=new menuItemModel(menuItemData)
  
    newMenuItemModel.save(function saveMenuItem(err, data) {
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
exports.find=query=>menuItemModel.find(query)