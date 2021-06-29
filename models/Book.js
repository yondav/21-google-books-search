const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  google: {
    type: String,
    default: 'google_id',
  },
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
    default:
      'https://dummyimage.com/287.98X479.22/222222/fff&text=photo+unavailable',
  },
  link: {
    type: String,
    default: 'more_info',
  },
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
