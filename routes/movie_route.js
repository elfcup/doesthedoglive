var express = require('express');
var router = express.Router();

var movie = require('../models/movie.js');

router.get('/', function(req, res) {
  movie.selectAll(function(data) {
    var hbsObject = {
      movies: data
    };
    res.render('index', hbsObject);
  });
});

router.get('/lives', function(req, res) {
  movie.selectLives(function(data) {
    var hbsObject = {
      movies: data
    };
    res.render('index', hbsObject);
  });
});

router.get('/dies', function(req, res) {
  movie.selectDies(function(data) {
    var hbsObject = {
      movies: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/movies', function(req, res) {
  console.log('req body ', req.body); 
 
  movie.insertOne([
    'movie_title',
    'dog_lives'
  ], [
    req.body.movie_title,
    req.body.dog_lives
  ], function(data) {
    res.redirect('/');
  });
});



module.exports = router;
