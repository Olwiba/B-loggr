var express = require('express');
var colors = require('colors');
var path = require('path');

var app = express();

// view engine setup
console.log('Setting views path...'.cyan);
app.set('views', path.join(__dirname, 'views'));
console.log('... Done!'.green);
console.log('Setting view engine...'.cyan);
app.set('view engine', 'hbs');
console.log('... Done!'.green);

console.log('Setting public path...'.cyan);
app.use(express.static(path.join(__dirname, 'public')));
console.log('... Done!'.green);


app.get('/', function (req, res) {
  res.redirect('/home')
});

app.get('/home', function (req, res) {
  res.send('Welcome to the Home Page!')
});



app.listen(8109, function () {
	console.log('--------------------------------------------------'.cyan);
	console.log('B-loggr is up and running! listening on port 8106!'.underline.green);
	console.log('--------------------------------------------------'.cyan);
});