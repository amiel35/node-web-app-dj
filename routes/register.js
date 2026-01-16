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
			res.render('register', {title: 'Register'});
		}
	} else {
		res.render('register', {title: 'Register'});
	}
	

});

router.post('/', async (req, res) =>{
	
	//res.send(req.body.ruser);
	
	
	try {
		
		const users = await Collection.find({user_name : req.body.ruser});
		
		if (users.length > 0 ) {
			
			res.send("User name already exist");
		}else {
			const hashedPassword = await bcrypt.hash(req.body.rpword, 10); // 10 is the salt rounds (cost factor)
			const reg = await Collection.create({
				user_name: req.body.ruser,
				user_pw: hashedPassword
			});
			res.send("Registration successfull");
		}
	} catch (error){
		console.error(error);
		res.status(500).json({ message: 'Server error'});
	}
	//res.send(req.body.user+"<br>"+req.body.pword);
	//res.render('login', {title: 'Login'});
	
	

});

module.exports = router;