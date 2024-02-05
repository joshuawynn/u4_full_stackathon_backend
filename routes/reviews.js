const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/rides/:id/reviews', reviewsCtrl.create);

router.delete('/rides/:id', reviewsCtrl.delete);

module.exports = router;