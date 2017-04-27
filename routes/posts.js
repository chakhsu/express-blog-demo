var express = require("express");
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

router.get('/', function (req, res, next) {
  res.send(req.flash());
});

router.post('/', checkLogin, function (req, res, next) {
  res.send(req.flash());
});

router.get('/create', checkLogin, function (req, res, next) {
  res.send(req.flash());
});

router.get('/posts/:postId', function (req, res, next) {
  res.send(req.flash());
});

router.post('/posts/:postId/edit', function (req, res, next) {
  res.send(req.flash());
});

router.get('/posts/:postId/edit', function (req, res, next) {
  res.send(req.flash());
});

router.post('/posts/:postId/remove', function (req, res, next) {
  res.send(req.flash());
});

router.post('/posts/:postId/comment', function (req, res, next) {
  res.send(req.flash());
});

router.post('/posts/:postId/comment/:commentId/remove', function (req, res, next) {
  res.send(req.flash());
});

module.exports = router;
