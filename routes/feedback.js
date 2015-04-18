var express = require('express');
var router = express.Router();

var feedback = {
	all: function(req, res, next){
		res.send({comment:"this is good", author: "ananthu"})
	}
}

router.get('/feedback/:id', feedback.all);

module.exports = router;