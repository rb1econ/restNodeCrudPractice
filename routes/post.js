var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/posts', function(req, res, next) {
  // the find here comes from mongoose;
  Post.find({}, function(err, results){
  	if(err){
  		res.status(500)
  		return res.send(err)
  	}
  	res.send(results);
  });
});

router.get('/post/:id', function(req, res, next){
	Post.findById(req.params.id, function(err, results){
		if(err){
			res.status(500)
			return res.send(err)
		}
		res.send(results);
	});
});

router.post('/posts', function(req, res, next){
	console.log('posts req.body', req.body);
	var newPost = req.body
	var post = new Post(newPost);

	post.save(function(err, results){
		if(err){
  		res.status(500)
  		return res.send(err)
		}
	
		res.render('index', {results: results, title: "Disco Golfer"});
		// res.send('hola discgolfer');
	});
});

router.put('/post/:id', function(req, res, next){
	// updates db with whatever is in the req.body, it can be can incomplete schema.
	Post.findByIdAndUpdate(req.params.id, req.body, function(err, results){
		if(err){
			res.status(500)
			return res.send(err)
		}
		res.send(results);
	});
});

router.delete('/post/:id', function(req, res, next){
	Post.findByIdAndRemove(req.params.id, req.body, function(err, results){
		if(err){
  		res.status(500)
  		return res.send(err)
  	}
		res.send(results);
	})
});

module.exports = router;

// THIS WORKS AS WELL:::::: 
// res.json(results); 