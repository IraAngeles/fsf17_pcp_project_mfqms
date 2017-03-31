var LocalStrategy = require("passport-local").Strategy;

var UsersProfiles = require("./database").UsersProfiles;


module.exports = function (app, passport){

    function authenticate(username,password,done){

        console.log (">>> " + username + " --- " + password);


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
        UsersProfiles.findOne({
            where: {
                email: user.email
            }
        }).then(function(result) {
            if(result){
                done(null, user);
            }
        }).catch(function(err){
            done(err, user);
        });
    });



};

