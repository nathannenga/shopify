var express     = require('express'),
    favicon     = require('serve-favicon'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    session     = require('express-session'),
    passport    = require('passport'),
    ejs         = require('ejs'),
    path        = require('path'),
    keys        = require('./config/keys.js').connections,
    http        = require('http');

process.env.NODE_ENV = require('./config/keys.js').env;

// App definition
var app = express();
app.set('view engine', 'ejs');

// require('./config/passport')(passport);

// Middleware
app.use(session({
    secret: keys.sessionSecret,
    resave: true,
    saveUninitialized: true,
    maxAge : 3600000 * 24 * 365
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'app')));
app.use(favicon(path.join(__dirname,'app','css','favicon.ico')));


require('./controllers/API.js')(app);
require('./controllers/Routes.js')(app, passport);

// Connections
if (keys.env === 'DEVELOPMENT') { var portNum = 3000; } else { var portNum = 80; }

var mongooseUri = keys.db;
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Mongoose uri:', mongooseUri);
});


// var server = app.listen(portNum, function () {
//     console.log('Server listening on port: ' + portNum, 'in ' + keys.env + ' mode.');
// });

var httpServer = http.createServer(app);
httpServer.listen(portNum, function () {
  console.log('HTTP server listening on port: ' + portNum, 'in ' + keys.env + ' mode.');
});
