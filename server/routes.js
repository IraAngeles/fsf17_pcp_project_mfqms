var ProductsController = require("./api/products.controller.js");
var ProductsAffectedController = require("./api/products.affected.controller.js");
var UserProfileController  = require("./api/user.profile.controller.js");

var express = require("express");
// var config = require("./config");
// var app = express(); 

const API_PRODUCTS_URI = "/api/products";
const API_PRODUCTS_AFFECTED_URI = "/api/productsaffected";
const API_REGISTER_URI = "/register";
const API_LOGIN_URI = "/login"; 
const API_LOGOUT_URI = "/logout";
const HOME_PAGE = "/home.html#!/home";
const SIGNIN_PAGE = "/home.html#!/login";

module.exports = function(app,passport) {

// get products is from legacy IBM DB2 database, will be using native sql
// will use
app.get (API_PRODUCTS_URI, ProductsController.getProducts);


app.post (API_PRODUCTS_AFFECTED_URI, ProductsAffectedController.createProductsAffected);
app.get (API_PRODUCTS_AFFECTED_URI, ProductsAffectedController.getProductsAffected);
app.put (API_PRODUCTS_AFFECTED_URI + "/:id", ProductsAffectedController.updateProductsAffected);
app.delete (API_PRODUCTS_AFFECTED_URI + "/:id", ProductsAffectedController.deleteProductsAffected);

app.post(API_REGISTER_URI, UserProfileController.register );

app.post(API_LOGIN_URI, passport.authenticate("local", {
    successRedirect: HOME_PAGE,
    failureRedirect: "/",
    failureFlash : true
}));

// app.get('/home', isAuthenticated, function(req, res) {
//     res.redirect('..' + HOME_PAGE);
// });


function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect(SIGNIN_PAGE);
}

app.use(function(req, res, next){
    if(req.user == null){
        res.redirect(SIGNIN_PAGE);
    }
    next();
});


};

