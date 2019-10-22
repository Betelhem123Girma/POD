// Load Module Dependencies
const events = require('events');

// Get Post DAL
const FoodItemDal = require('../dal/food');

// Get Serach options
const searchOptions = require('../lib/search_options');

// Default fields to return on search if not provided
var defaultFields = ['name', 'description', 'price', 'catagory'];

/*
 * Create Post
 *
 *  1. Create Post
 *  2. Respond
 */
exports.createFoodItem = function createFoodItem(req, res, next) {
    let workflow = new events.EventEmitter();

    workflow.on('validateData', function validateData() {
        // Validate Post Data
        req.checkBody({
            title: {
                notEmpty: true,
                errorMessage: 'Invalid name'
           },
           description: {
                notEmpty: true,
                errorMessage: 'Invalid description'
           },
        });

        let validationErrors = req.validationErrors();

        if(validationErrors) {
            res.status(400);
            res.json(validationErrors);
        } else {
            // On success emit the createPost event
            workflow.emit('createFoodItem');
        }
    });

    workflow.on('createFoodItem', function createFoodItem() {
        FoodItemDal.create(req.body, function callback(err, food) {
            if (err) {
                return next(err);
            }

            // On Success emit create profile event
            workflow.emit('respond', food);
        });
    });

    workflow.on('respond', function respond(food) {
        res.status(201);
        res.json(post);
    });

    workflow.emit('validateData');
};

/*
 * Search Posts
 *
 *  1. Validate Search Query
 *  2. Fetch Posts form database
 *  3. Respond
 */
exports.searchFoodItem = function searchFoodItem(req, res, next) {
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
            workflow.emit('searchFoodItem');
        }
    });

    workflow.on('searchFoodItem', function searchFoodItem() {
        var opts = {
            filter: req.query.filter,
            fields: req.query.fields,
            sort: req.query.sort,
            limit: req.query.limit,
            page: req.query.page
        };

        FoodItemDal.search(opts, function (err, foods) {
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
            "result":  foods
        });
    });

    workflow.emit('validateSearchQuery');
};
