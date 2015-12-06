var ObjectId = require('mongodb').ObjectId;
var mongoUtil = require('../helpers/mongoUtil');

var History = function () {}

//Get ViewingHistory
History.prototype.History = function (req, res, next) {

	var cookieuser = req.cookies.userId || '';

	if (cookieuser.length > 0) {
		//Acquire connection to mongodb
		var pool = mongoUtil.connect();
		pool.acquire(function (err, client) {
			if (err) {
				// handle error - this is generally the err from your
				// factory.create function
			} else {
				//query users collection with _id saved as cookie
				var users = client.collection("users");
				users.findOne({
					'_id' : ObjectId(cookieuser)
				}, function (err, result) {					
					pool.release(client);				
					var jsonobj = result.ViewingHistory||'';

					res.render('History', {
						ID : cookieuser,
						data : jsonobj
					});
				})

			}

		});
	} else {
		res.render('Error', {
			ID : cookieuser,
			msg : "Please Login"
		});
	}
}
//Save User History
History.prototype.SaveHistory = function (req, res, next) {

	var videoObj = {};
	videoObj.id = req.query.Id;
	
	videoObj.url = req.query.url;
	videoObj.title = req.query.title;
	var userId = req.cookies.userId||'';	
	if(userId.length>0)
	{
	var pool = mongoUtil.connect();
	pool.acquire(function (err, client) {
		if (err) {
			// handle error - this is generally the err from your
			// factory.create function
		} else {
			var users = client.collection("users");
			users.update({
				'_id' : ObjectId(userId)
			}, {
				'$push' : {
					'ViewingHistory' : videoObj
				}
			}, function (err, numModified) {
				pool.release(client);
				console.log('mod' + numModified);
			})

		}

	});
}
else
	console.log("user null");
}

module.exports = History;