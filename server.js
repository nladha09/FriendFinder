
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});