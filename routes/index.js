var express = require('express');
var router = express.Router();

var FormulaParser = require('hot-formula-parser').Parser;
var parser = new FormulaParser();

/* GET home page. */
router.get('/', function (req, res, next) {

  let romans = parser.parse("ROMAN(17)").result;

  res.render('index', {
    title: 'Advance Roman Numerals',
    romans
  });
});

/* GET Roman Numerals. */
router.post('/', function (req, res, next) {

  let romans = parser.parse(`ROMAN(${req.body.number.replace(/SUM.*/gi, "")})`).result;

  res.render('index', {
    title: 'Advance Roman Numerals',
    number: req.body.number,
    romans
  });
});


module.exports = router;
