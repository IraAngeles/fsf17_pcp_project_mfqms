var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express(); 
var database = require("./database");

// var Sequelize = require("sequelize");

const NODE_PORT = process.env.PORT || 3000;

const CLIENT_FOLDER = path.join(__dirname + '/../client');  
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');


// const MYSQL_USERNAME = 'root';
// const MYSQL_PASSWORD = 'abcd1234';




// var sequelize = new Sequelize(
// 'employees',
// MYSQL_USERNAME,
// MYSQL_PASSWORD,
// {
//     host: 'localhost',         // default port    : 3306
//     logging: console.log,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// }
// );

// Loads model for department table
// var Department = require('./models/department')(sequelize, Sequelize);

// sequelize
//   .sync({ force: true })
//   .then(function(err) {
//     console.log('It worked!');
//   }, function (err) { 
//     console.log('An error occurred while creating the table:', err);
//   });


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

