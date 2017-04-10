/**
 * Load dummy data here upon sync
 * 
 * @param {any} UsersProfiles 
 * @param {any} Documents 
 * @param {any} ProductsAffected 
 */
insertData = function (UsersProfiles, Documents, ProductsAffected, Owners, Summaries, Attachments, Transactions) {

  // load user profiles first
  UsersProfiles
  .bulkCreate([
    {"id":1,"first_name":"Isaias","last_name":"Angeles","email":"isaias@sg.ibm.com","password":"Abcd!234","status":'Active', approval_token: null, reset_token: null, access_control:'Admin'},
    {"id":2,"first_name":"Reynaldo","last_name":"Corral","email":"corralro@sg.ibm.com","password":"Abcd!234","status":'Active', approval_token: null, reset_token: null, access_control:'Admin'},
    {"id":3,"first_name":"Paul","last_name":"Zulpa","email":"pzulpa@gmail.com","password":"Abcd!234","status":'Active', approval_token: null, reset_token: null, access_control:'Owner'},
    {"id":4,"first_name":"Jeff","last_name":"Komatsu","email":"jkomatsu@gmail.com","password":"Abcd!234","status":'Active', approval_token: null, reset_token: null, access_control: null},
    {"id":5,"first_name":"Xue","last_name":"Feng","email":"xf@gmail.com","password":"Abcd!234","status":'Active', approval_token: null, reset_token: null, access_control:null},
    {"id":6,"first_name":"ck","last_name":"kk","email":"ck@gmail.com","password":"Abcd!234","status":'Active', approval_token: null, reset_token: null, access_control:'Reader'}
   ])
  .then(function (results) {
    console.log("loaded users_profile table");
    // then load documents
    Documents
    .bulkCreate([
        {title: "title1", owner: "Carolyn Thornton", status: "closed", document_number: "tS6xAlVVEcyfKSi", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title2", owner: "Nettie Walker", status: "closed", document_number: "5GLOwmlhmJxjagKpi", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 1},
        {title: "title3", owner: "Marie Herrera", status: "closed", document_number: "mk4Rbc0as0nq", problem_description: "desc", problem_status: "new", attr: "img", brand: "p", field_impact: 0},
        {title: "title4", owner: "Lora Hansen", status: "closed", document_number: "jeCAenOoRaG", problem_description: "desc", problem_status: "legacy", attr: "img", brand: "p", field_impact: 0},
        {title: "title5", owner: "Ruth Vega", status: "closed", document_number: "j3ZOUZyVuYep8My", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 1},
        {title: "title6", owner: "Cameron Sanders", status: "closed", document_number: "55rpfTo0cc", problem_description: "desc", problem_status: "legacy", attr: "img", brand: "z", field_impact: 0},
        {title: "title7", owner: "Ray George", status: "open", document_number: "QZmJsWFOO1qqUu", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "z", field_impact: 0},
        {title: "title8", owner: "Lelia Ramirez", status: "closed", document_number: "VNUgztQjNQCrw9y9b0U", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title9", owner: "Ivan Tyler", status: "closed", document_number: "BSCB6si1o82AG914qAf", problem_description: "desc", problem_status: "new", attr: "doc", brand: "p", field_impact: 0},
        {title: "title10", owner: "Hattie Burke", status: "closed", document_number: "ZCNrT2ySoObiikA", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "z", field_impact: 0},
        {title: "title11", owner: "Phoebe Gomez", status: "closed", document_number: "NofjmmQ6YvokJy", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title12", owner: "Joseph Marshall", status: "closed", document_number: "V9xii", problem_description: "desc", problem_status: "legacy", attr: "img", brand: "z", field_impact: 0},
        {title: "title13", owner: "Dollie Chambers", status: "closed", document_number: "ZXhLeYXQ6YFFEiBT5dWw", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "z", field_impact: 0},
        {title: "title14", owner: "Cody Gregory", status: "open", document_number: "fGQkicOjJNb6R", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 1},
        {title: "title15", owner: "Clara Bryan", status: "closed", document_number: "7X4j1G1BVR1WhFNqlEbi", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "z", field_impact: 0},
        {title: "title16", owner: "Francisco Brown", status: "closed", document_number: "Rz8Nn3iXG", problem_description: "desc", problem_status: "new", attr: "doc", brand: "p", field_impact: 0},
        {title: "title17", owner: "Mabel Mack", status: "closed", document_number: "jbCH6SMdatuWRwiR7", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title18", owner: "Linnie Long", status: "closed", document_number: "D4IFoeVsVf", problem_description: "desc", problem_status: "legacy", attr: "img", brand: "p", field_impact: 0},
        {title: "title19", owner: "Ina Soto", status: "closed", document_number: "Z2Vg6nleq", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "z", field_impact: 0},
        {title: "title20", owner: "Clara Peters", status: "open", document_number: "guQNIhtMpeqtvdcm4YMI", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title21", owner: "Ann Moore", status: "closed", document_number: "j2ids6gxz", problem_description: "desc", problem_status: "new", attr: "doc", brand: "p", field_impact: 0},
        {title: "title22", owner: "Jay Harmon", status: "closed", document_number: "7js3hb4On", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 1},
        {title: "title23", owner: "Dale Hamilton", status: "closed", document_number: "KhNQVyy3zollhga", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title24", owner: "Betty Holland", status: "closed", document_number: "zJ4Pv4az", problem_description: "desc", problem_status: "new", attr: "doc", brand: "p", field_impact: 0},
        {title: "title25", owner: "Ada Lucas", status: "open", document_number: "gW2Fh12pYeXwH", problem_description: "desc", problem_status: "new", attr: "doc", brand: "p", field_impact: 0},
        {title: "title26", owner: "Milton Webb", status: "closed", document_number: "VtceFm", problem_description: "desc", problem_status: "legacy", attr: "img", brand: "p", field_impact: 0},
        {title: "title27", owner: "Susie Reid", status: "closed", document_number: "02IPO5joQ", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "z", field_impact: 0},
        {title: "title28", owner: "Genevieve Craig", status: "closed", document_number: "b0NYhO1RB", problem_description: "desc", problem_status: "new", attr: "doc", brand: "p", field_impact: 0},
        {title: "title29", owner: "Joe Baker", status: "open", document_number: "kGqDX4QDJSe0Fx", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title30", owner: "Virginia Rodriquez", status: "closed", document_number: "5mkfamr0xOw2", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title31", owner: "Terry Vega", status: "closed", document_number: "HZ08pCiySsYi4wNeD", problem_description: "desc", problem_status: "new", attr: "doc", brand: "p", field_impact: 1},
        {title: "title32", owner: "Roxie Hopkins", status: "open", document_number: "Sy3eJGlU8biaPq11h9uB", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title33", owner: "Jose Wagner", status: "closed", document_number: "suvjBI7UEA0mDUpH4", problem_description: "desc", problem_status: "legacy", attr: "doc", brand: "p", field_impact: 0},
        {title: "title34", owner: "Ronnie Houston", status: "open", document_number: "700Z7rJ4q2uMjk", problem_description: "desc", problem_status: "legacy", attr: "img", brand: "p", field_impact: 0}
    ])
    .then(function (results) {
        console.log("loaded documents table");
        // load products affected which is a child of document
        ProductsAffected
          .bulkCreate([
            {"id":1,"part_number":"10001","part_number_code":"xbox","commodity":"mtm", "model_type_number": "7800-100","fru_part_number": "90001", "ss_document_id": 1 },
            {"id":2,"part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011", "ss_document_id": 2 },
            {"id":3,"part_number":"10011","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8800-000","fru_part_number": "90011", "ss_document_id": 3 },
            {"id":4,"part_number":"10031","part_number_code":"ybox","commodity":"mtm", "model_type_number": "8888-000","fru_part_number": "90031", "ss_document_id": 4 },
            {"id":5,"part_number":"10021","part_number_code":"ibox","commodity":"mtm", "model_type_number": "9800-010","fru_part_number": "90021", "ss_document_id": 5 }
          ])
          .then(function (results) {
              console.log("loaded products affected table");
          }).catch(function () {
              console.log("Error", arguments)
          })
        // load Owners which is a child of document
        Owners
        .bulkCreate([
          {"id":1,"supplier":"supplier1","ss_document_id":1},
          {"id":2,"supplier":"supplier2","ss_document_id":2},
          {"id":3,"supplier":"supplier3","ss_document_id":3},
          {"id":4,"supplier":"supplier4","ss_document_id":4},
          {"id":5,"supplier":"supplier5","ss_document_id":5}
        ])
        .then(function (results) {
          console.log("loaded owners table");
        }).catch(function () {
          console.log("Error", arguments)
        }) 
        // load Transactions which is a child of document  
        Transactions
        .bulkCreate([
          {"id":1,"transaction_type":"create","ss_document_id":1},
          {"id":2,"transaction_type":"read","ss_document_id":2},
          {"id":3,"transaction_type":"update","ss_document_id":3},
          {"id":4,"transaction_type":"delete","ss_document_id":4},
          {"id":5,"transaction_type":"update","ss_document_id":5}
        ])
        .then(function (results) {
            console.log("loaded transactions table");
        }).catch(function () {
            console.log("Error", arguments)
        })  
        // load Summaries which is a child of document 
        Summaries
        .bulkCreate([
          {id:1, summary:"summary1", ss_document_id:1},
          {id:2, summary:"summary2", ss_document_id:2},
          {id:3, summary:"summary3", ss_document_id:3},
          {id:4, summary:"summary3", ss_document_id:4},
          {id:5, summary:"summary3", ss_document_id:5}
        ])
        .then(function (results) {
          console.log("loaded summaries table");
          // load Attachments which is a child of Summaries 
          Attachments
          .bulkCreate([
            {id:1, location:"here", summary_id:1},
            {id:2, location:"there", summary_id:2},
            {id:3, location:"everywhere", summary_id:3},
            {id:4, location:"everywhere", summary_id:4},
            {id:5, location:"everywhere", summary_id:5}
          ])
          .then(function (results) {
              console.log("loaded attachments table");
          }).catch(function () {
              console.log("Error", arguments)
          }) 
        }).catch(function () {
            console.log("Error", arguments)
        })    
    }).catch(function () {
        console.log("Error", arguments)
    })  

  }).catch(function () {
      console.log("Error", arguments)
  }) 

};