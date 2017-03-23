var Products = [{"partno":"10001","codename":"xbox","commodity":"mtm", "mtm": "7800-100","fru": "90001" },
                        {"partno":"10011","codename":"ybox","commodity":"mtm", "mtm": "8800-000","fru": "90011" },
                        {"partno":"10021","codename":"ibox","commodity":"mtm", "mtm": "9800-010","fru": "90021" }];

exports.getProducts = function(req, res){

    res
        .status(200)
        .json(Products);

};


