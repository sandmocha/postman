var express = require('express');
var app= express();
var bodyParser =require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function(req, res, next) {
console.log('Record timestamp');
next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/squareroot', function(req, res, next) {
	var body = req.body;
	var x = body.x;
	var result = 0;
	var object = {
		"x" : x,
		"result x squareroot" : Math.sqrt(x)
	}
	res.json(object);
});

app.post('/calculator/rest/cmtoinch', function(req, res, next) {
	var body = req.body;
	var x = body.x;
	var result = 0;
	var object = {
		"x" : x,
		"result X " : x*0.3937
	}
	res.json(object);
});

app.post('/calculator/rest/kbtotb', function(req, res, next) {
	var body = req.body;
	var x = body.x;
	var result = 0;
	var object = {
		"x" : x,
		"result X" : x*0.000000001
	}
	res.json(object);
});

app.get('/help', function(req, res, next) {
res.send('Help me');
});

app.listen(3000);