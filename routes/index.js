var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,a : "test 1"});
});
router.get('/:userId', function(req, res, next) {
	console.log(req.params.userId);
	res.json(req.params.userId)
  	res.render('index', { content: 'Express' ,a : "test 1"});
});
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,a : "test 1"});
});
module.exports = router;
