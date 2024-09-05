var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post("/hello", (req, res) => {
  const response = new Template().addSimpleText("Hello world");
  res.send(response);
});

module.exports = router;
