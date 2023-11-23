const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send("Welcome to the payment system\n");
});

app.get("/available_payments", function (req, res) {
    res.json({
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    });
    res.end();
  });
  
app.post("/login", function (req, res) {
    res.send(`Welcome ${req.body.userName}`);
  });
  
app.listen(7865, function () {
    console.log("API available on localhost port 7865")
})

module.exports = app;
