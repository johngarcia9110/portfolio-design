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
  res.render('index', {
    navStyle: 'transpNav',
    bodyStyle: 'transparent'
  });
});

app.get('/about', function(req, res){
  res.render('about', {
    navStyle: 'dark',
    bodyStyle: 'light'
  });
});

app.get('/projects', function(req, res){
  res.render('projects', {
    navStyle: 'dark',
    bodyStyle: 'light'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    navStyle: 'dark',
    bodyStyle: 'light'
  });
});

app.get('/project/project-template', function(req, res){
  res.render('project/project-template');
});


http.listen(4000, function(){
  console.log('listen on port: 3000');
});
