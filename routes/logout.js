var express = require('express');
var router = express.Router();
const session = require('express-session');

router.get('/', function(req, res, next){
	

	if(req.session) {
		if(req.session.user){
			req.session.destroy(err =>{
				if (err) {
					res.status(500).send('Error logging out');
				} else {
					res.clearCookie();
					res.send('Logout successful');
				}
			});
		} else {
			res.redirect('/login');
		}
		
	} else{
		res.redirect('/login');
	}



});

module.exports = router