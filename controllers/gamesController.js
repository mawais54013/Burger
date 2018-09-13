var express = require("express");

var router = express.Router();
var burger = require("../models/game.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    
  burger.insertOne(["name", "bad", "put"], [req.body.name, req.body.bad, req.body.put], function(result) {
    // burger.insertOne(["name"], [req.body.name], function(result) {
    // res.json({ id: result.insertId });
    res.redirect('/');
  });
});

// router.post("/api/newGame", function(req, res)
// {
//   burger.insertOne(["newGame"], [req.body.name], function(result) {
//         // res.json({ id: result.insertId });
//         res.redirect('/');
//       });
// });

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      bad: req.body.bad
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
  res.redirect('/');
});

module.exports = router;
