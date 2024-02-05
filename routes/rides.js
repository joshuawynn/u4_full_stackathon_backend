const express = require('express')
const router = express.Router()
const ridesCtrl = require('../controllers/rides')

router.get("/", ridesCtrl.index);

router.get("/:id", ridesCtrl.show);

module.exports = router

