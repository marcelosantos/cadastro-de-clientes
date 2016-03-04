var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Cliente = require('../models/Cliente.js');

/* GET /clientes listing. */
router.get('/', function(req, res, next) {
  Cliente.find(function (err, clientes) {
    if (err) return next(err);
    res.json(clientes);
  });
});

/* POST /clientes */
router.post('/', function(req, res, next) {
  Cliente.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /clientes/id */
router.get('/:id', function(req, res, next) {
  Cliente.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /clientes/:id */
router.put('/:id', function(req, res, next) {
  Cliente.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /clientes/:id */
router.delete('/:id', function(req, res, next) {
  Cliente.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
