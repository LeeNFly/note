var handler = require('./handler')
var express = require('express')

// module.exports = function (app) {
//     app.get('/', handler.handlerIndex)
//
//     app.get('/index', handler.handlerIndex)
//
//     app.get('/details', handler.handlerDetails)
//
//     app.get('/submit', handler.handlerSubmit)
//
//     app.get('/add', handler.handlerGetAdd)
//
//     app.post('/add', handler.handlerPostAdd)
//
//
//     app.use('/resources', express.static('resources'))
// }

// 改造:
// 为避免将app对象交出去(app对象权限太大), 使用express提供的router对象注册路由
var router =  express.Router()
router.get('/', handler.handlerIndex)
router.get('/index', handler.handlerIndex)
router.get('/details', handler.handlerDetails)
router.get('/submit', handler.handlerSubmit)
router.get('/add', handler.handlerGetAdd)
router.post('/add', handler.handlerPostAdd)
router.use('/resources', express.static('resources'))

module.exports = router


