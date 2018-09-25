// Note: started off as the burger game and then changed it to video games
// Half way I tried to change the quotes and database but the values were not appearing so I kept it to burgers. 
var express = require("express");
var bodyParser = require("body-parser");
// port 3000
var PORT = process.env.PORT || 4000;

var app = express();
// use all public files
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// use handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// first this server goes to the controller
var routes = require("./controllers/gamesController.js");

app.use("/", routes);
// if it works then it will connect on the port
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
