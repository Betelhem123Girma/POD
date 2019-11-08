const request = require("supertest");
const expect = require("chai").expect;

// Load application
var app = require("../app");

describe("Order Endpoint", function() {
  let post;
  var sampleOrder= {

    "userId":"5dc43d0f4856e30024bf8983",
    "menuItemId":["5dc4a6551bdd5a00241e1018"],
    "order_name":"Bety order",
    "order_quantity":2
    }
// testing addOrder
  describe("#Order ORDER /orders/add", function() {
    it("should create a new order", function(done) {
      request(app)
        .post("/orders/add")
        .set("Content-Type", "application/json; charset=utf-8")
        .send({"userId":sampleOrder.userId,"menuItemId":sampleOrder.menuItemId,"order_name":sampleOrder.order_name,"order_quantity":sampleOrder.order_quantity})
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
