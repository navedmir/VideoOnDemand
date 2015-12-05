var ApiController = require('./apiController'),
SessionsController = require('./SessionsController'),
History = require('./History');

module.exports = exports = function (app) {

	var apiController = new ApiController();
	var history = new History();
	var sessionsController = new SessionsController();
	app.get('/', apiController.isLoggedInMiddleware);
	app.get('/Home', apiController.isLoggedInMiddleware);
	app.get('/History', history.History);
	app.get('/Login', sessionsController.displayLoginPage);
	app.post('/Login', sessionsController.handleLoginRequest);
	app.get('/Logout', sessionsController.Logout);
	app.get('/SaveHistory', history.SaveHistory);
	app.post('/Signup', sessionsController.handleSignup);

}