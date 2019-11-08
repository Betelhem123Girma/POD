const request = require("supertest");
const expect = require("chai").expect;

// Load application
var app = require("../app");

describe("MenuItems Endpoint", function() {
  let post;
  var sampleMenuItem= {
    "menuItem_name":"Black forest",
    "price":50,
    "ingredient":[],
    "rating":3,
    "description":"This is a nice dessert",
    "catagory":"Dessert"
    }
// testing addOrder
  describe("#Order MenuItems /pod/addMenuItems", function() {
    it("should create a new menuItem", function(done) {
      request(app)
        .post("/pod/addMenuItems")
        .set("Content-Type", "application/json; charset=utf-8")
        
        .send({"ingredient":sampleMenuItem.ingredient,"rating":sampleMenuItem.rating,
        "description":sampleMenuItem.description,
   " menuItem_name":sampleMenuItem.menuItem_name,"price":sampleMenuItem.price,
    "catagory":sampleMenuItem.catagory
})
        // .expect("Content-Type", "application/json; charset=utf-8")
        .expect(201)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }

          // Set Post for later use
          order = res.body;

          // Assertion tests on response body
          expect(res.body._id).to.not.equal("string");

          done();
        });
    });
  })


});
