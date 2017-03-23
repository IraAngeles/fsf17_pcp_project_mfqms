var ProductsController = require("./api/products.controller.js");
var ProductsAffectedController = require("./api/products.affected.controller.js");

var express = require("express");
// var config = require("./config");
var app = express(); 

const API_PRODUCTS_URI = "/api/products";
const API_PRODUCTS_AFFECTED_URI = "/api/productsaffected";

module.exports = function(app) {

// get products is from legacy IBM DB2 database, will be using native sql
// will use
app.get (API_PRODUCTS_URI, ProductsController.getProducts);


app.post (API_PRODUCTS_AFFECTED_URI, ProductsAffectedController.createProductsAffected);
app.get (API_PRODUCTS_AFFECTED_URI, ProductsAffectedController.getProductsAffected);
app.put (API_PRODUCTS_AFFECTED_URI + "/:id", ProductsAffectedController.updateProductsAffected);
app.delete (API_PRODUCTS_AFFECTED_URI + "/:id", ProductsAffectedController.deleteProductsAffected);



};

