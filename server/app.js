var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express(); 
var database = require("./database");

var cookieParser = require('cookie-parser');
var session = require("express-session");
var passport = require("passport");
var flash = require('connect-flash');


// var Sequelize = require("sequelize");

const NODE_PORT = process.env.PORT || 3000;

const CLIENT_FOLDER = path.join(__dirname + '/../client');  
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');

app.use(flash());
app.use(cookieParser());

app.use(express.static(CLIENT_FOLDER));
app.use(bodyParser.json());

// Initialize session
app.use(session({
    secret: "mfqms-secret",
    resave: false,
    saveUninitialized: true
}));


//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

require('./auth.js')(app, passport);
require("./routes")(app, passport);

// require("./routes.js")(app);

app.use('/bower_components', express.static( path.join(__dirname,'/../bower_components')));

app.use(express.static(path.join(__dirname,"/../client")));


app.use(function (req, res) {
    res.status(404).sendFile(path.join(MSG_FOLDER + "/404.html"));
});

// app.use(function (err, req, res, next) {
//     res.status(501).sendFile(path.join(MSG_FOLDER + '/501.html'));
// });


app.listen(NODE_PORT, function () {
    console.log("Application server running at port " + NODE_PORT);
});

