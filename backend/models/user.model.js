const mongoose = require("mongoose");
const { default: validator } = require('validator');

const User = new mongoose.Schema(
  {
	name: {
		type: String,
		required: [true, 'User name is required'],
		trim: true,
	  },
	email: {
		type: String,
		required: [true, 'Please provide a email address'],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Please provide a valid email address'],
	  },
    password: { 
		type: String, 
		required: true 
	},
	role: {
		type: String,
		enum: ['learner', 'lecturer', 'admin'],
		default: 'learner',
	  },
	
  },
  { collection: "user-data" }
);

const UserModel = mongoose.model("User", User);

module.exports = UserModel;
