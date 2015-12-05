var request = require('request');

var apiController = function () {
	apiControllerObj = this;
}

// Get Videos from api
apiController.prototype.GetVideoList = function (callback) {
	request({
		url : "https://demo2697834.mockable.io/movies"
	}, function (err, response, body) {
		if (err) {
			console.log(err);
			return callback(err, null);
		}

		callback(err, response.body);
	});
}

//get Default view with videos
apiController.prototype.isLoggedInMiddleware = function (req, res, next) {

	apiControllerObj.GetVideoList(function (err, results) {
		var jsonresponse = JSON.parse(results);
		var cookieuser = req.cookies.userId || '';		
		res.render('index', {
			ID : cookieuser,
			data : jsonresponse.entries
		})
	});

}

module.exports = apiController;