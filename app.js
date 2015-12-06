var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./controllers');
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.use(cookieParser());
app.use(bodyParser.urlencoded({
		extended : true
	}));

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

routes(app);

app.listen(port);