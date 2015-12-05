
var crypto = require('crypto');
var mongoUtil = require('./mongoUtil');

var Users = function () {

	this.addUser = function (username, password, callback) {
		"use strict";
		// Generate password hash
		var password_hash = crypto.createHash('sha1').update(password).digest('hex');

		// Create user document
		var user = {
			'username' : username,
			'password' : password_hash
		};

		var pool = mongoUtil.connect();
		pool.acquire(function (err, client) {
			if (err) {
				// handle error - this is generally the err from your
				// factory.create function
			} else {
				var users = client.collection("users");
				users.insert(user, function (err, result) {
					"use strict";

					if (!err) {
						console.log("Inserted new user");
						return callback(null, result);
					}

					return callback(err, null);
					pool.release(client);
				});

			}
		});
	}

	this.validateLogin = function (username, password, callback) {
		"use strict";

		// Generate password hash
		var password_hash = crypto.createHash('sha1').update(password).digest('hex');

		var user = {
			'username' : username,
			'password' : password_hash
		};

		var pool = mongoUtil.connect();
		pool.acquire(function (err, client) {
			if (err) {
				// handle error - this is generally the err from your
				// factory.create function
			} else {
				var users = client.collection("users");
				users.findOne(user, function (err, user) {
					if (err)
						return callback(err, null);
					if (user) {
						callback(null, user);
					} else
						callback("no user", null);

					pool.release(client);
				});

			}
		});
	}

}

module.exports = Users;