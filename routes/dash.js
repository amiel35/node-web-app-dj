var express = require('express');
var router = express.Router();
const session = require('express-session');

router.get('/', function(req, res, next){
	

	if(req.session) {
		if(req.session.user){
			res.send('Welcome '+req.session.user.username);
		} else{
			res.redirect('/login');
		}
	} else {
		res.redirect('/login');
	}


});

module.exports = router