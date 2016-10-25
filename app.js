var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var http = require('http').Server(app);
var sassMiddleware = require('node-sass-middleware');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(sassMiddleware({
  src: path.join(__dirname, 'public/sass/'),
  dest:path.join(__dirname, 'public'),
  debug: true,
  indentedSyntax: true,
  outputStyle: 'expanded',
  prefix: '/stylesheets'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/projects', function(req, res){
  res.render('projects');
});

app.get('/contact', function(req, res){
  res.render('contact');
});


http.listen(3000, function(){
  console.log('listen on port: 3000');
});
