const request = require("request");
const expect = require("chai").expect;


describe('tests for the api', function () {
  describe("api tests", function () {
    it("correct status code", function () {
       request("http://localhost:7865", function (response) {
        response && expect(response.statusCode).to.equal(200);
    }); 
    });
    it("Corect result body", function () {
        request("http://localhost:7865", function (body) {
          body && expect(body).to.equal("Welcome to the payment system");
        });
      });
    });
  describe("GET /cart/:id", function () {
    it("id is number", function () {
      request(
        "http://localhost:7865/cart/23",
        function (response, body) {
          response && expect(response.statusCode).to.equal(200);
          body && expect(body).to.equal("Payment methods for cart 23");
        }
      );
    });
    it("id is not number", function () {
      request(
        "http://localhost:7865/cart/abc",
        function (responses) {
          response && expect(response.statusCode).to.equal(404);
        }
      );
  });
});
})
