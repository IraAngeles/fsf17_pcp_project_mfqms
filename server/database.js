var Sequelize = require("sequelize");
var config = require("./config");

const MYSQL_USERNAME = 'root';
const MYSQL_PASSWORD = 'abcd1234';  // ira login
// const MYSQL_PASSWORD = 're1nald0';  // Reiz login

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

// Loads models table
var UsersProfiles = require('./models/users_profiles')(database, Sequelize);
var Documents = require('./models/documents')(database, Sequelize);
var ProductsAffected = require('./models/products_affected')(database, Sequelize);
var Summaries = require('./models/summaries')(database, Sequelize);
var Attachments = require('./models/attachments')(database, Sequelize);
var Owners = require('./models/owners')(database, Sequelize);
var Transactions = require('./models/transactions')(database, Sequelize);

// associations
Documents.hasMany(ProductsAffected, {as: 'products_affected', foreignKey: 'ss_document_id'});
ProductsAffected.belongsTo(Documents, {foreignKey: 'ss_document_id'});
Documents.hasMany(Owners, {foreignKey: 'ss_document_id'});
Owners.belongsTo(Documents, {foreignKey: 'ss_document_id'});
Documents.hasMany(Summaries, {foreignKey: 'ss_document_id'});
Summaries.belongsTo(Documents, {foreignKey: 'ss_document_id'});
Summaries.hasMany(Attachments, {foreignKey: 'summary_id'});
Attachments.belongsTo(Summaries, {foreignKey: 'summary_id'});
Documents.hasMany(Transactions, {foreignKey: 'ss_document_id'});
Transactions.belongsTo(Documents, {foreignKey: 'ss_document_id'});

database
  .sync({ force: false })
  .then(function(err) {
    require("./dummydata");
    insertData(UsersProfiles, Documents, ProductsAffected, Owners, Summaries, Attachments, Transactions);
    console.log('Database is now in sync');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });

module.exports = {
    UsersProfiles : UsersProfiles,
    Documents: Documents,
    ProductsAffected : ProductsAffected,
    Owners: Owners,
    Summaries: Summaries,
    Attachments: Attachments,
    Transactions: Transactions
};