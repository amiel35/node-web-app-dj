var express = require('express');
var router = express.Router();
var Collection = require('../models/user');
const session = require('express-session');
const bcrypt = require('bcryptjs');


router.get('/', function(req, res, next){
	
	if(req.session) {
		if(req.session.user){
			res.redirect('/dash');
		} else{
			res.render('login', {title: 'Login'});
		}
	} else {
		res.render('login', {title: 'Login'});
	}
	

});

router.post('/', async (req, res) =>{
	try {
		
		//const users = await Collection.find({user_name : req.body.user, user_pw : req.body.pword});
		//const users = await Collection.find({user_name : req.body.user});
		//const users = await Collection.findOne({user_name : req.body.user}, {user_name:1, user_pw:1, _id: 0});
		const users = await Collection.findOne({ user_name : req.body.user }).select('user_pw');
		if (/*users.length > 0*/users ) {
			
			
			//get stored pasword
			//const storedPassword = await Collection.findOne({ user_name : req.body.user }).select('user_pw').exec();
			//res.send(req.body.user);
			//res.send(users.user_pw);
			/*
			const isMatch = await bcrypt.compare(req.body.pword, storedPassword);*/
			const isMatch = await bcrypt.compare(req.body.pword, users.user_pw);

			if (isMatch) {
			  // Passwords match, proceed with login
				req.session.user = { username: req.body.user };
				await req.session.save(); 
						
				res.redirect('/dash');
			} else {
				res.send("Incorrect password");
				
			  // Passwords do not match
			}
			

			//res.send("Result found");
		}else {
			res.send("No result");
		}
	} catch (error){
		console.error(error);
		res.status(500).json({ message: 'Server error'});
	}
	//res.send(req.body.user+"<br>"+req.body.pword);
	//res.render('login', {title: 'Login'});

});

module.exports = router;