var Products = [{"id":"1","part_number":"10001","part_number_code":"xbox","commodity":"mtm", "model_type_number": "7800-100","fru_part_number": "90001" },
                {"id":"2","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"3","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"4","part_number":"30031","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8888-000","fru_part_number": "90031" },
                {"id":"5","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "6800-000","fru_part_number": "92011" },
                {"id":"6","part_number":"10021","part_number_code":"cbox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"7","part_number":"10031","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8888-000","fru_part_number": "90031" },
                {"id":"8","part_number":"10011","part_number_code":"abox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"9","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"10","part_number":"10031","part_number_code":"ybox","commodity":"mtm", "model_type_number": "3888-000","fru_part_number": "90031" },
                {"id":"11","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"12","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "5800-000","fru_part_number": "90011" },
                {"id":"13","part_number":"10031","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8888-000","fru_part_number": "90031" },
                {"id":"14","part_number":"19011","part_number_code":"zztop","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"15","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011" },
                {"id":"16","part_number":"20031","part_number_code":"abox","commodity":"mtm", "model_type_number": "8888-000","fru_part_number": "90031" }, 
                {"id":"17","part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-888","fru_part_number": "90011" },
                {"id":"18","part_number":"30011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "94011" },
                {"id":"19","part_number":"10031","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8888-000","fru_part_number": "92031" },                                                                               
                {"id":"20","part_number":"10021","part_number_code":"ibox","commodity":"mtm", "model_type_number": "9800-010","fru_part_number": "90021" }];

exports.getProducts = function(req, res){

    res
        .status(200)
        .json(Products);

};


