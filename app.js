var express = require('express');
var app = express(); //object that represents express application
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to Mongoose

mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Try using the API endpoint ----> /api/books or /api/genres');
});

app.listen(3000);
console.log('Running bookstore on port 3000');
