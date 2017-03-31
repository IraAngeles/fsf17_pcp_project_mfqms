var UsersProfiles = require("../database").UsersProfiles;


exports.register = function (req, res){
    console.log("register ->>>> ");
    console.log(JSON.stringify(req.body));
    
    UsersProfiles
        .create(req.body)
        .then(function(result){
            console.log(result)
            res.status(200).json();
        })
        .catch(function(error){
            console.log(error);
            res.status(500).json();
        })


};


// exports.login = function(req, res){
//     console.log("login ->>>> ");
//     console.log(JSON.stringify(req.body));




// };