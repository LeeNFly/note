var handler = require("./handler")
var express = require('express')

// router对象，可以用来注册路由规则 （奏折）
var router = express.Router();

router.get('/', handler.indexHandler)
router.get('/index', handler.indexHandler)
router.get('/details', handler.detailsHandler)
router.get('/submit', handler.submitHandler)
router.get('/add', handler.getAddHandler)
router.post('/add', handler.postAddHandler)
router.use('/resources', express.static('resources'));

module.exports = router;