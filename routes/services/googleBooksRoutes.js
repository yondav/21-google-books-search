require('dotenv').config();
const router = require('express').Router();
const axios = require('axios');

router.get('/:search', async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${process.env.API_KEY}`
    );
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
