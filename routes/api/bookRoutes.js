const router = require('express').Router();
const Book = require('../../models/Book');
const cors = require('cors');

router.get('/', cors(), async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.json(error);
  }
});

router.post('/', cors(), async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', cors(), async (req, res) => {
  try {
    const deleteBook = await Book.deleteOne({ _id: req.params.id });
    res.json(deleteBook);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
