var Products = [{"id":"1","part_number":"10001","part_number_code":"xbox","commodity":"mtm", "model_type_number": "7800-100","fru_part_number": "90001" },
                {"id":"2","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"3","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"4","part_number":"10031","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8888-000","fru_part_number": "90031" },
                {"id":"5","part_number":"10021","part_number_code":"ibox","commodity":"mtm", "model_type_number": "9800-010","fru_part_number": "90021" }];

exports.getProducts = function(req, res){

    res
        .status(200)
        .json(Products);

};


