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


exports.getprofiles = function (req, res){

    UsersProfiles
        .findAll()
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });

}

exports.updateprofiles = function (req, res){
    console.log(req.params.id);
    console.log(req.body);

    var whereclause = { id : req.params.id }
    UsersProfiles
        .update(req.body, {where: whereclause} )
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });

}

exports.deleteprofiles = function (req,res){
    console.log(req.params.id);
    console.log(req.body);

    var whereclause = { id : req.params.id }
    UsersProfiles
        .findOne({where: whereclause} )
        .then(function(result){

            console.log(JSON.stringify(result));


            var whereclause = { id : result.id }
            UsersProfiles
                .update( {status: "Revoke" }, {where: whereclause} )
                .then(function(result){
                    console.log("deleted");
                    res.status(200).json(result);
                })
                .catch(function(err){
                    res.status(500).json(err);
                });
        })
        .catch(function(err){
            res.status(500).json(err);
        });


}
