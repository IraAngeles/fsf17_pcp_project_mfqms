var Sequelize = require("sequelize");
// var app = express(); 

const MYSQL_USERNAME = 'root';
const MYSQL_PASSWORD = 'abcd1234';

var database = new Sequelize(
'ssdb',
MYSQL_USERNAME,
MYSQL_PASSWORD,
{
    host: 'localhost',         // default port    : 3306
    logging: console.log,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}
);

// Loads model for department table
var ProductsAffected = require('./models/products_affected')(database, Sequelize);
// // var Documents = require('./models/documents')(database, Sequelize);
// database
//   .sync({ force: true })
//   .then(function(err) {
//     console.log('Database is now in sync');
//   }, function (err) { 
//     console.log('An error occurred while creating the table:', err);
//   });

module.exports = {
    ProductsAffected : ProductsAffected

};