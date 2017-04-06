var Documents = require("../database").Documents;
// var ProductsAffected = require("../database").ProductsAffected;
// var Users_profile = require("../database").Users_profile;
// var Summaries = require("../database").Summaries;
// var Attachments = require("../database").Attachments;
// var Owners = require("../database").Owners;
// var Transactions = require("../database").Transactions;

/**
 * get document table only
 * 
 * @param {any} req 
 * @param {any} res 
 */
exports.updateDoc = function (req, res){

  // update document
    console.log(req.query);
    console.log(req.body);
    // console.log(Object.keys(req.body));
    // console.log(req.body[Object.keys(req.body)]);
    Documents
      .findOne({ 
        where:{id: req.body.id}
      })
      .then(function(doc){
        doc
          .update(req.body)
          .then(function () {
              res.json(post)
          })
          .catch(function () {
          });
      })
      .catch(function (err) {
          handleErr(res, err);
      });;

};
