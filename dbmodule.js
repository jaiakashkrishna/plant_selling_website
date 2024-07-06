var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.bill = function(){

};

exports.authenticateUser = function(pass, email, response) {
db.users.find({ "pass": pass, "email": email },
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

