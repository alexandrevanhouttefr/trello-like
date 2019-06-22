var config = require('./config/config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
const path = require('path');
var cors = require('cors');


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

let whitelist = ['http://localhost:3000','http://localhost:80', undefined];
let corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }, credentials: true
};
app.use(cors(corsOptions));


/**
 * MongoDB Connection
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/' + config.db.name, { useNewUrlParser: true, useCreateIndex: true })

/**
 * Models
 */
var User = require('./api/models/userModel');
var Board = require('./api/models/boardModel');

/**
 * Routes
 */
var userRoutes = require('./api/routes/userRoutes');
var boardRoutes = require('./api/routes/boardRoutes');
userRoutes(app);
boardRoutes(app);

app.listen(app.get('port'), function(){
    console.log( 'Server is listening on port ' + app.get('port'));
});