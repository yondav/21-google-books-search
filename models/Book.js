const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    default: 'book_title',
  },
  authors: {
    type: Array,
    default: 'authors',
  },
  description: {
    type: String,
    default: 'description',
  },
  image: {
    type: String,
    default: 'image_URL',
  },
  link: {
    type: String,
    default: 'more_info',
  },
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
