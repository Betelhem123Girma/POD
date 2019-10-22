const express = require('express');

// Get Posts controller
const Foods = require('../controller/foods');

// Get Auth lib
const checkAuth = require('../lib/check_auth');

// Create a router
const router = express.Router();

/**
 * @api {post} /posts/  Create Post
 * @apiName CreatePost
 * @apiGroup Post
 * @apiVersion 0.0.1
 *
 * @apiParam {String} title The title of the Post.
 * @apiParam {String} description The description of the Post.
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		title: Forest Gump,
 * 		description: Blog description,
 * 	 }
 *
 * @apiSuccess {String} _id  The ID of the newly created Post.
 * @apiSuccess {String} title The title of the Post.
 * @apiSuccess {Date} date_created The date on which the Post entry was created.
 * @apiSuccess {Date} last_modified The date on which the Post entry was last updated.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		 _id: '58a1ea8b36dfb71d975384af',
 * 		title: Forest Gump,
 *  	description: Blog description,
 * 		date_created: 2017-02-13T17:19:08.404Z,
 * 		last_modified: 2017-02-13T17:19:08.404Z,
 * 	 }
 *
 */
router.post('/', checkAuth, Foods.createFoodItem);

/**
 * @api {get} /posts/search Search posts
 * @apiName GetPosts
 * @apiGroup Post
 * @apiVersion 0.0.1
 *
 * @apiParam {String} [filter]   The filtering to select the posts to return.
 * @apiParam {String} [fields]   The fields of the post documents to return.
 * @apiParam {String} [limit]    The maximum number of posts to return.
 * @apiParam {String} [page]     The page number used to determine how many documents to skip.
 * @apiParam {String} [sort]     The sort field to use in ascending or descending order.
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		 filter: {date_modified:'2017-02-13T17:19:08.404Z'}
 * 		 limit: 50
 * 		 sort: -date_created
 * 		 fields:title,description,date_created,date_modified,
 * 	 }
 *
 * @apiSuccess {Object} options  The query options used in the search the movies.
 * @apiSuccess {Object[]} posts  The resulting set of documents.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 200 OK
 * 	 {
 * 		 options: {
 * 			 filter: {date_update:'2017-02-13T17:19:08.404Z'},
 * 			 fields: 'title,description,date_created,date_modified',
 * 			 limit: 50,
 * 			 sort: -date_created,
 * 		 },
 * 		 movies: [{
 * 			title: 'My First Blog',
 * 		  description: 'Once upon a time there was a tool called JavaScript!',
 * 			date_created: 2017-02-13T17:19:08.404Z,
 * 			date_modified: 2017-02-13T17:19:08.404Z,
 * 		 }]
 * 	 }
 *
 */
router.get('/search', Posts.searchPosts);


module.exports = router;