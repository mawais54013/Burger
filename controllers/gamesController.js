var express = require("express");
// get these requirements 
var router = express.Router();
var burger = require("../models/game.js");
// get all from the database and then show them on the DOM 
router.get("/", function(req, res) {
  // this sends to tge selectAll in the model/gem.js
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// this inserts a new entry with three different values 
router.post("/api/burgers", function(req, res) {
    // sends to insertOne in model/game.js
  burger.insertOne(["name", "bad", "put"], [req.body.name, req.body.bad, req.body.put], function(result) {
    res.redirect('/');
  });
});
// this looks for the id of a game and later on changing the bad value of the game wheather it was good or bad 
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
// sends to the model/game.js 
  burger.updateOne(req.body, condition, function(result)
  {
    if(result.changedRows == 0)
    {
      return res.status(404).end();
    }
    else 
    {
      res.status(200).end();
    }
  });
 
});

module.exports = router;
