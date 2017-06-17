var express = require('express');
var app = express(); //object that represents express application
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());


Genre = require('./models/genres');
Book = require('./models/book');

// Connect to Mongoose

mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Try using the API endpoint ----> /api/books or /api/genres');
});

app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
})

app.post('/api/genres', function(req, res){
  var genre = req.body; // allows u to access anything that comes through the form
  Genre.addGenre(genre, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
})

app.get('/api/books', function(req, res){
  Book.getBooks(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  });
})

app.get('/api/books/:_id', function(req, res){
  Book.getBookById(req.params._id, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
})

app.post('/api/books', function(req, res){
  var book = req.body; // allows u to access anything that comes through the form
  Book.addBook(book, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
})



app.listen(3000);
console.log('Running bookstore on port 3000');
