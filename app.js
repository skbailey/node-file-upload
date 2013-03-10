var express = require('express'), 
    http = require('http'), 
    path = require('path');

var  app = express();

app.configure(function(){
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({uploadDir:'./upload'}));
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
});

app.get("/", function(req, res){
  res.render("index");
});

app.post('/upload', function(req, res) {
  console.log(req.files.image) // this doesn't fire at all
  res.send(200); // this doesn't run also
});

app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);