const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 4
	},
} , {
	tiemstamps: true,
});

const User = mongoose.model('User' , userSchema);

module.exports = User;