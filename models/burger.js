const ORM = require("../configuration/orm.js");

var burger = {
	SelectAll: function(req, res){
		ORM.SelectAll(res);
	},

	InsertOne: function(req, res){
		var burgerName = req.body.burgerName;
		ORM.InsertOne(burgerName, false, new Date(), res);
	},

	UpdateOne: function(req, res){
		var idNumber = parseInt(req.params.id);
		ORM.UpdateOne("devoured", true, idNumber, res);
	}
};

module.exports = burger;