var menuItemDal=require('../dal/menuItem')

var result=require('../util/res')
var events=require('events')
// Get Serach options
const searchOptions = require('../lib/search_options');

// Default fields to return on search if not provided
var defaultFields = ['food_name', 'description', 'price', 'catagory'];
///Find Menus that are in specific given catagory
exports.findMenuItems=(req,res)=>{
    
    return menuItemDal.findMenuItems({catagory:req.body.catagory})
       .then(menuItems=>{
           result.data(menuItems,res)
       })
}    
    
//Add menuItems 
 exports.createMenuItem=function createMenuItem(req,res,next) {
        menuItemDal.create(req.body, function callback(err, food) {
        
            if (err) {
                return next(err);
            }

            // On Success emit create profile event
            res.json(food);
        });
  

    
    }
    //search for menuItem with
    exports.searchMenuItem=(req, res, next)=> {
        var workflow = new events.EventEmitter();
    
        // Set default search parameter options
        req.query.filter = searchOptions.getFilter(req);
        req.query.fields = searchOptions.getFields(req, defaultFields);
        req.query.page = searchOptions.getPage(req);
        req.query.limit = searchOptions.getLimit(req);
        req.query.sort = searchOptions.getSort(req);
    
        workflow.on('validateSearchQuery', function validateSearchQuery() {
            // Validate search parameters
    
            req.checkQuery('filter', 'Filter is empty!')
                .notEmpty();
            req.checkQuery('page', 'Page should be a number!')
                .isInt();
            req.checkQuery('limit', 'Limit should be a number!')
                .isInt();
            req.checkQuery('sort', 'Sort field is empty!')
                .notEmpty();
    
            var validationErrors = req.validationErrors();
    
            if (validationErrors) {
                res.status(400);
                res.json(validationErrors);
            } else {
                // On Success emit search Posts event
                workflow.emit('searchMenuItem');
            }
        });
    
        workflow.on('searchMenuItem', function searchMenuItem() {
            var opts = {
                filter: req.query.filter,
                fields: req.query.fields,
                sort: req.query.sort,
                limit: req.query.limit,
                page: req.query.page
            };
    
            menuItemDal.search(opts, function (err, foods) {
                if (err) {
                    // handle error
                    return next(err);
                }
    
                workflow.emit('respond', opts, foods);
            });
        });
    
        workflow.on('respond', function respond(opts, foods) {
            res.status(200);
            res.json({
                "options": opts,
                "result":  foodsher
            });
        });
    
        workflow.emit('validateSearchQuery');
    };
//menu item order