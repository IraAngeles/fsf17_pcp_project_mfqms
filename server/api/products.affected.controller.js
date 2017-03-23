var ProductsAffected = require("../database").ProductsAffected;

// var Products = [{"partno":"10001","codename":"xbox","commodity":"mtm", "mtm": "7800-100","fru": "90001" },
//                         {"partno":"10011","codename":"ybox","commodity":"mtm", "mtm": "8800-000","fru": "90011" },
//                         {"partno":"10021","codename":"ibox","commodity":"mtm", "mtm": "9800-010","fru": "90021" }];

// exports.getProducts = function(req, res){

//     res
//         .status(200)
//         .json(Products);

// };

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