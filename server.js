const Express = require("express"),
Exphbs = require("express-handlebars"),
MethodOverride = require("method-override"),
routes = require("./controllers/burgerControllers.js");
var app = Express();
var port = process.env.PORT || 3000;

app.use(Express.static("./public"));
app.engine("handlebars", Exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(MethodOverride("_method"));
app.use(routes);
app.listen(port, function(error){
	if (error)
		throw error;
	console.log("Listening on port: " + port);
});