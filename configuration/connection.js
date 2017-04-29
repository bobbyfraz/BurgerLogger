const MySQL = require("mysql");

var connection = MySQL.createConnection({
	host:"localhost",
	user: "root",
	password: "password",
	database: "burgers_db"
});

connection.connect(function(error) {
	if (error)
		throw error;
});

module.exports = connection;