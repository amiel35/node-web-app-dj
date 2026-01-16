const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming your model is in models/user.js

router.get('/', async (req, res) => {
	try {
		
		//const newUser = new User({ user_name : "john", user_pw : "jj"});
		//await newUser.save();
		const findUser = await User.find({});
		res.send(findUser);
	}
	catch (error) {
		console.error('Error:', error);
		res.status(500).json({ message: 'Server error'});
	}

});

module.exports = router;