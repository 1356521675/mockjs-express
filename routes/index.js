var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-mockjs' });
});

router.get('/mockjs', function(req, res, next) {
	var Mock = require('mockjs')
	var data = Mock.mock({
	    'list|1-10': [{
	        'id|+1': 1
	    }]
	})
	var ret = JSON.stringify(data, null, 4)
	console.log(ret);
  	res.render('index', { title: ret });
});

router.get('/mockapi', function(req, res, next) {
	var callback = req.query.callback;
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'categorya|3-5':[{
	    	'categoryName|3-4':'@cword',
	    	'categoryID|+1': 10,
	    	logo:'@image(64x64,#eee,Logo)',
	    	'categoryItema|1-4':[{
	    		cname:'@cname',
	    		'cid|+1':100,
	    		'item|3-7':[{
	    			name:'@cname',
	    			'id+1':1000,
	    			link:'@url'
	    		}]
	    	}]
	    }]
	})
	var ret = JSON.stringify(data, null, 4);
	ret = callback+"("+ret+")";
  	res.send(ret);
});



module.exports = router;
