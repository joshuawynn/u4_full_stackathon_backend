const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
	res.status(200).json({message: "rides index route"})
});

router.post("/", async (req, res) =>  {
	res.status(201).json({message: "rides create route"})
});

module.exports = router

