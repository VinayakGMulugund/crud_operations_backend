const router = require('express').Router();
let exercise = require('../models/exercisemodel');

router.route('/').get((req,res) => {
	Exercise.find()
	.then(exercises => res.json(exercises))
	.catch(err => res.status(400).json("error: "+err));
});

router.route('/add').post((req,res)=> {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const new Exercise({
		username,
		description,
		duration,
		date,
	});
});

module.exports router;

