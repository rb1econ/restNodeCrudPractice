var express = require('express');
var router = express.Router();
var Discs = require('../models/post.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	Discs.find({}, function(err, results){
		console.log('err (db)', err);
		console.log('results (db)', results);
  	res.render('index', { title: 'Discs for Golf', discs: results });
	})
});

router.use('/api/', require('./post.js'));

module.exports = router;
