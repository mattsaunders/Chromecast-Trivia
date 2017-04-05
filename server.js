var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, '/receiver')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/receiver/index.html'));
});

app.listen(app.get('port'), function() {
	console.log('Server running on port 8000');
});