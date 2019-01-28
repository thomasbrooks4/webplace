var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Thomas' Webplace" });
});

router.get('/tychocam/', function(req, res, next) {
  res.render('tychocam', { title: "Tycho Cam" });
});

router.get('/whatisthomascurrentlyobsessedwith/', function(req, res, next) {
  res.render('obsessions', { title: "What is Thomas currently obsessed with?" });
});

router.get('/neveragain', function(req, res, next) {
  res.render('neveragain', { title: "Never Again" });
});

module.exports = router;
