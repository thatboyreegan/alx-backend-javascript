const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send("Welcome to the payment system\n");
});

app.get('/cart/:id(\\d+', function (req, res) {
    res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, function () {
    console.log("API available on localhost port 7865")
})

module.exports = app;
