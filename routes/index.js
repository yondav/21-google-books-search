const router = require('express').Router();
const apiRoutes = require('./api');
const search = require('./services/googleBooksRoutes');

router.use('/api', apiRoutes);
router.use('/search', search);

module.exports = router;
