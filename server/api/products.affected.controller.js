var ProductsAffected = require("../database").ProductsAffected;


exports.createProductsAffected = function (req, res){

    console.log(req.body);

    ProductsAffected
        .create(req.body)
        .then(function (result){
            console.log(result);
            res.status(201).json(result);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json(result);
        });

};


exports.getProductsAffected = function (req, res){

    ProductsAffected
        .findAll()
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });

};

exports.updateProductsAffected = function (req, res){
    console.log(req.params.id);
    console.log(req.body);
    var whereclause = { id : req.params.id }
    ProductsAffected
        .update(req.body, {where: whereclause} )
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });


};

exports.deleteProductsAffected = function (req, res){
    console.log(req.params.id);
    console.log(req.body);
    var whereclause = { id : req.params.id }
    ProductsAffected
        .destroy({where: whereclause} )
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });


};