var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var pass = querystring.parse(data1)["pass"];
var pass2 = querystring.parse(data1)["pass2"];
console.log(pass);
console.log(pass2);
var email = querystring.parse(data1)["email"];
console.log(email);

if (request.url === '/login') {
module.authenticateUser(pass, email, response);
            } 
else if (request.url === '/save') {
module.saveUser(pass,pass2, email, response);
            } 
      });
    
}).listen(3000);
console.log("Server started");

exports.saveUser = function(pass,name, email, response) {
console.log('Saving user to mongo');
db.users.insert({ "pass": pass, "name": name, "email": email },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
	});
}
