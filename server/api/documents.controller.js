var Documents = require("../database").Documents;
var ProductsAffected = require("../database").ProductsAffected;
var Users_profile = require("../database").Users_profile;
var Summaries = require("../database").Summaries;
var Attachments = require("../database").Attachments;
var Owners = require("../database").Owners;
var Transactions = require("../database").Transactions;

/**
 * get document table only
 * 
 * @param {any} req 
 * @param {any} res 
 */
exports.getDocuments = function (req, res){

  var query = req.query;
  var params = req.params;

  var where = {deleted_at: null};
  // var where = {};

  // if (typeof params.length != 'undefined' && typeof query.length != 'undefined')
  //   where = {where, query} 
  // if (typeof params != 'undefined') 
    // where = query
    console.log("getDocuments")
    console.log(query);
    console.log(params);
    console.log(where);

  Documents
      .findAll({
        where: where
      })
      .then(function(result){
          res.status(200).json(result);
      })
      .catch(function(err){
          res.status(500).json(err);
      });

};

/**
 * get documents and details
 * 
 * @param {any} req 
 * @param {any} res 
 */
exports.getdocumentsDetails = function (req, res){

  var query = req.query;
  var params = req.params;
  var where = {deleted_at: null};
  // var where = {};
  console.log(typeof params.length)
  console.log(typeof query.length)

  if (typeof params != 'undefined' && typeof query != 'undefined')
    where = {deleted_at: null, id:req.query.id}
  // if (typeof params != 'undefined') 
  //   where = query
    console.log(query);
    console.log(params);
    console.log(where);

  Documents
      .findAll({
        where: where,
        include: [
          {model: Transactions},
          {model: ProductsAffected, as: 'products_affected'},
          {model: Summaries, include:[{model: Attachments}]},
          {model: Owners}
        ]
      })
      .then(function(result){
          res.status(200).json(result);
      })
      .catch(function(err){
          res.status(500).json(err);
      });

};

exports.createDoc = function (req, res) {

  console.log(req.body);
  Documents
  .create({
      title: req.body.title,
      owner: req.body.owner,
      status: req.body.status,
      document_number: req.body.document_number,
      problem_description: req.body.problem_description,
      problem_status: req.body.problem_status,
      attr: req.body.attr,
      brand: req.body.brand,
      field_impact: req.body.field_impact
  })
  .then(function (post) {
      res.json(post);
  })
  .catch(function (err) {
      console.log(err);
      res
          .status(500)
          .json({error: true});
  });  

}