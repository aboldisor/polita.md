
var express = require('express'),
    config = require('./config/locals')(),
    app = express(),
    http = require('http'),
    https = require('https'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan  = require('morgan'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    expressLayouts = require('express-ejs-layouts'),
      favicon = require('serve-favicon');


app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('layout', 'defaultLayout') // defaults to 'layout'
app.use(expressLayouts);

app.use(morgan('dev'));
app.use(methodOverride());
app.use(cookieParser('polita'));
app.use(session({ secret: '-Zq+3]un2Hw.+W+lVI[DLr9O;V4VS&g}!n%)2a[U0sc[4',saveUninitialized: true, resave: true}));
app.use(favicon(__dirname + '/public/av-19392.ico'));
app.use(express.static(__dirname + '/public'));

console.log(__dirname + '/public');

    errorhandler = require('errorhandler');



var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.use(errorhandler());
}

fs.readdirSync('./api/controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        var  route = require('./api/controllers/' + file);
        route.controller(app);
    }
});





http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});
