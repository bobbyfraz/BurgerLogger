const Connection = require("./connection.js");

var orm = {
	SelectAll: function(res) {
		Connection.query("SELECT * FROM burgers;", function(error, data) {
			if (error)
				throw error;
			console.log("Selected all burgers.");
			console.log(data);
			res.render("index", {burgers: data});
		});
	},

	InsertOne: function(burgerName, devoured, date, res) {
		Connection.query("INSERT burgers (burger_name, devoured, date) VALUES (?, ?, ?)", [burgerName, devoured, date], function(error, data) {
			if (error)
				throw error;
			console.log("Your burger has been added.");
			console.log(data);
			res.redirect("/");
		});
	},

	UpdateOne: function(colName, newValue, idNumber, res) {
		Connection.query("UPDATE burgers SET ?? = ? WHERE id = ?", [colName, newValue, idNumber], function(error, data) {
			if (error)
				throw error;
			console.log("Your entry has been updated.");
			console.log(data);
			res.redirect("/");
		});
	}
};

module.exports = orm;