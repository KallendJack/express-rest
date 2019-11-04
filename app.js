const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

Genre = require('./models/genre')
Book = require('./models/book')

const port = process.env.PORT || 3000;

const app = express()

app.use(bodyParser.json())

// Connect to Mongoose
mongoose.connect(`mongodb+srv://jack:1234@test-api-anyw0.mongodb.net/bookstore?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', function(req, res){
    res.send('Testing...')
})

app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if(err){
      res.json(err)
    }
    res.json(genres)
  })
})

app.post('/api/genres', function(req, res){
  const genre = req.body
  Genre.addGenre(genre, function(err, genre){
    if(err){
      res.json(err)
    }
    res.json(genre)
  })
})

app.put('/api/genres/:_id', function(req, res){
  const id = req.params._id
  const genre = req.body
  Genre.updateGenre(id, genre, {}, function(err, genre){
    if(err){
      res.json(err)
    }
    res.json(genre)
  })
})

app.delete('/api/genres/:_id', function(req, res){
  const id = req.params._id
  Genre.deleteGenre(id, function(err, genre){
    if(err){
      res.json(err)
    }
    res.json(genre)
  })
})

app.get('/api/books', function(req, res){
  Book.getBooks(function(err, books){
    if(err){
      res.json(err)
    }
    res.json(books)
  })
})

app.post('/api/books', function(req, res){
  const book = req.body
  Book.addBook(book, function(err, book){
    if(err){
      res.json(err)
    }
    res.json(book)
  })
})

app.get('/api/books/:_id', function(req, res){
  Book.getBookById(req.params._id, function(err, book){
    if(err){
      res.json(err)
    }
    res.json(book)
  })
})

app.put('/api/books/:_id', function(req, res){
  const id = req.params._id
  const book = req.body
  Book.updateBook(id, book, {}, function(err, book){
    if(err){
      res.json(err)
    }
    res.json(book)
  })
})

app.delete('/api/books/:_id', function(req, res){
  const id = req.params._id
  Book.deleteBook(id, function(err, genre){
    if(err){
      res.json(err)
    }
    res.json(genre)
  })
})

app.listen(port);
console.log(`Running on port ${port}`)