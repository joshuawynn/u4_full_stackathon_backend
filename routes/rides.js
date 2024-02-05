const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
	res.status(200).json({message: "rides index route"})
});

router.post("/", async (req, res) =>  {
	res.status(201).json({message: "rides create route"})
});

router.get("/:id", (req, res) => {
	res.status(200).json({message: "rides show route: " + req.params.id })
});

router.delete("/:id", (req, res) => {
	res.status(200).json({message: "rides delete route: " + req.params.id })
});

router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "rides update route: " + req.params.id })
});

module.exports = router

