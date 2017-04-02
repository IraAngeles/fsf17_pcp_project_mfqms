var LocalStrategy = require("passport-local").Strategy;
var UsersProfiles = require("./database").UsersProfiles;


module.exports = function (app, passport){

    function authenticate(username,password,done){

        console.log ("authenticate >>> " + username + " --- " + password);
        // var user = {
        //     email:username,
        //     password:password
        // }

        // return done(null, user);

        UsersProfiles
            .findOne({
                where: {
                    email: username
                }
            }).then(function(result) {
                if(!result){
                    return done(null, false);
                }else{
                    return done(null, result);
                }
            }).catch(function(err){
                return done(err, false);
            });




    };


    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    }, authenticate));

    passport.serializeUser(function (user, done) {
        console.info("serial to session");
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        console.log("===>>> " + JSON.stringify(user));
        UsersProfiles.findOne({
            where: {
                email: user.email
            }
        }).then(function(result) {
            if(result){
                console.log("--->>> " + JSON.stringify(result));
                done(null, user);
            }
        }).catch(function(err){
            done(err, user);
            // done(err, null);            
        });
    });



};

