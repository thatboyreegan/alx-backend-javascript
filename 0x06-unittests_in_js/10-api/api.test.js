const request = require("request");
const expect = require("chai").expect;

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