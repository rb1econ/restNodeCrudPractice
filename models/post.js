var mongoose = require('mongoose');

var Post = mongoose.Schema({
	title: {
		type: String,
		required: true
	}, 
	body: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Post', Post);