var config = require('./config/config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * Get HTML Template
 */
app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, 'views')
    })
});


/**
 * MongoDB Connection
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/' + config.db.name, { useNewUrlParser: true, useCreateIndex: true })

/**
 * Models
 */
var User = require('./api/models/userModel');

/**
 * Routes
 */
var userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

app.listen(app.get('port'), function(){
    console.log( 'Server is listening on port ' + app.get('port'));
});