var ProductsController = require("./api/products.controller.js");
var ProductsAffectedController = require("./api/products.affected.controller.js");
var UserProfileController  = require("./api/user.profile.controller.js");

var express = require("express");
var path = require("path");
// var config = require("./config");
// var app = express(); 

const API_PRODUCTS_URI = "/api/products";
const API_PRODUCTS_AFFECTED_URI = "/api/productsaffected";
const API_USER_PROFILES_URI = "/api/userprofiles";
// const API_REGISTER_URI = "/register";
const API_LOGIN_URI = "/login"; 
const API_LOGOUT_URI = "/logout";
const HOME_PAGE = "/#!/home";
const SIGNIN_PAGE = "/#!/login";

module.exports = function(app,passport) {

// get products is from legacy IBM DB2 database, will be using native sql
// will use
app.get (API_PRODUCTS_URI, ProductsController.getProducts);

//  API - Products affected 

app.post (API_PRODUCTS_AFFECTED_URI, ProductsAffectedController.createProductsAffected);
app.get (API_PRODUCTS_AFFECTED_URI, ProductsAffectedController.getProductsAffected);
app.put (API_PRODUCTS_AFFECTED_URI + "/:id", ProductsAffectedController.updateProductsAffected);
app.delete (API_PRODUCTS_AFFECTED_URI + "/:id", ProductsAffectedController.deleteProductsAffected);

// END

// API - User Profile 

app.post(API_USER_PROFILES_URI, UserProfileController.register );
app.get(API_USER_PROFILES_URI, UserProfileController.getprofiles );
app.put(API_USER_PROFILES_URI  + "/:id", UserProfileController.updateprofiles );
app.delete(API_USER_PROFILES_URI  + "/:id", UserProfileController.deleteprofiles );


app.use(express.static(path.join(__dirname,"/../client")));

app.post(API_LOGIN_URI, passport.authenticate("local"),
 function(req, res){
    res.status(200).json("Login successfull!");

 });

app.get("/status/user", function (req, res) {
    var status = "";
    if(req.user) {
        status = req.user.email;


    }
    console.info("status of the user --> " + status);
    res.send(status).end();
});

app.get("/logout", function(req, res) {
    req.logout();             // clears the passport session
    req.session.destroy();    // destroys all session related data
    res.send(req.user).end();
});


// app.get('/home', isAuthenticated, function(req, res) {
//     res.redirect('..' + HOME_PAGE);
// });


// function isAuthenticated(req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//     res.redirect(SIGNIN_PAGE);
// }

// app.use(function(req, res, next){
//     if(req.user == null){
//         res.redirect(SIGNIN_PAGE);
//     }
//     next();
// });


};

