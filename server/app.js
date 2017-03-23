var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express(); 
var database = require("./database");

// var Sequelize = require("sequelize");

const NODE_PORT = process.env.PORT || 3000;

const CLIENT_FOLDER = path.join(__dirname + '/../client');  
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');


app.use(express.static(CLIENT_FOLDER));
app.use(bodyParser.json());

require("./routes.js")(app);


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

