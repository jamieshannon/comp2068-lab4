var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/*
Get page jamie
 */
router.get('/jamie', function (req, res, next){
    res.render('jamie', {title: 'Jamie', message: 'Jamie is a student in his second year of computer programming at ' +
    'georgian college.'});
});

/*
Get page matt
 */

router.get('/matt', function (req, res, next){
    res.render('matt', {title: 'Matt', message: 'Matt is a student in his second year of ennvironmental technology at' +
    'georgian college.'});
});

/*
Get page richard
 */

router.get('/richard', function (req, res, next){
    res.render('richard', {title: 'Richard', message: 'Richard is a electrical engineer who works at Hydro One. He was' +
    'recognized for 30 years of service with his employer.'});
});

/*
Get page jane
 */

router.get('/jane', function (req, res, next){
    res.render('jane', {title: 'Jane', message: 'Jane is a retired home maker who successfully raised four children who ' +
    'for the most part are well adjusted individuals.'});
});

module.exports = router;
