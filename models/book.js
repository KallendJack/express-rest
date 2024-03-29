const mongoose = require('mongoose')

// Book Schema
const bookSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    publisher: {
      type: String
    },
    pages: {
      type: String
    },
    image_url: {
      type: String
    },
    buy_url: {
      type: String
    },
    create_date: {
      type: Date,
      default: Date.now
    }
})

const Book = module.exports = mongoose.model('Book', bookSchema)

// Get Books
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit)
}

// Get Book
module.exports.getBookById = function(id, callback){
  Book.findById(id, callback)
}

// Add Book
module.exports.addBook = function(book, callback){
  Book.create(book, callback)
}

// Update Genre
module.exports.updateBook = function(id, book, options, callback){
  const query = {_id: id}
  const update = {
    title: book.title,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    pages: book.pages,
    image_url: book.image_url,
    buy_url: book.buy_url
  }
  Book.findOneAndUpdate(query, update, options, callback)
}

// Delete Book
module.exports.deleteBook = function(id, callback){
  const query = {_id: id}
  Book.remove(query, callback)
}