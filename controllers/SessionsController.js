var Users = require('../helpers/Users');

var SessionsController = function () {}

//Render Login Page
SessionsController.prototype.displayLoginPage = function (req, res, next) {
	"use strict";
	return res.render("login", {
		ID : ''
	});
};

//Handle Login
SessionsController.prototype.handleLoginRequest = function (req, res, next) {
	"use strict";
	var users = new Users();
	var username = req.body.username;
	var password = req.body.password;
	users.validateLogin(username, password, function (err, user) {
		if (err)
			res.send('err' + err);
		else {
			res.cookie("userId", user._id); //set _id as cookie
			res.redirect('/Home');
		}
	});
}

//Handle Sign In
SessionsController.prototype.handleSignup = function (req, res, next) {
	var users = new Users();
	var username = req.body.username;
	var password = req.body.password;
	users.addUser(username, password, function (err, user) {
		if (err)
			res.render('Error', {
				ID : '',
				msg : err
			});
		else {
			res.cookie("userId", user.ops[0]._id); //set _id as cookie
			res.redirect('/Home');
		}
	});
}

//Logout
SessionsController.prototype.Logout = function (req, res, next) {
	"use strict";
	res.clearCookie('userId'); //Clear cookie
	res.redirect('/Home');
};

module.exports = SessionsController;