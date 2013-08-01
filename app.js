var express = require('express');
var app = express(),
    http = require('http'),
    path = require('path');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

//Home page
app.get('/', function(req, res){
 res.render('index', {
   title: 'Home'
 });
// });app.get('*', home.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});