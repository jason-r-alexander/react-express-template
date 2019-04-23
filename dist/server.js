"use strict";

var express = require('express');

var app = express();
var port = 5000;
app.get('/api/customers', function (req, res) {
  var customers = [{
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  }, {
    id: 2,
    firstName: 'John',
    lastName: 'Doe'
  }, {
    id: 3,
    firstName: 'John',
    lastName: 'Doe'
  }];
  res.json(customers);
});
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});