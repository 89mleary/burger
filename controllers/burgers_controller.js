var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(result) {
    res.redirect('/');
  });
});

module.exports = router;
