var mysql = require("mysql");


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "wms_opsportal"
});

con.connect(function(err){
	if(err) throw err;
	console.log("connected");
	con.query("select * from users;", function(err, result){
		if(err) throw err;
		//console.log(result);
		console.log(result[0].givenname);
		//console.log(result.affectedRows)
	});
});