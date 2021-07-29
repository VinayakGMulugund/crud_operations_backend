const mongoose = require('mongoose');

const schema = mongoose.Schema;

const exerciseSchema = new Schema({
	username: {type: String, required: true},
	descriptuon: {type: String, required:true},
	duration: {type: Number, required:true},
	date: {type: Date, required: true},
} , {
	timestamp: true,
});

const Exercise = mongoose.model('Exercise' , exerciseSchema);

module.exports = Exercise;