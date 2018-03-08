var orm = require('../config/orm.js');

var movie = {
  selectAll: function(cb) {
    orm.selectAll('dogmovies', function(res) {
      cb(res);
    });
  },

  selectLives: function(cb) {
    orm.selectLives('dogmovies', function(res) {
      cb(res);
    });
  },

  selectDies: function(cb) {
    orm.selectDies('dogmovies', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('dogmovies', cols, vals, function(res) {
      cb(res);
    });
  },

};

module.exports = movie;
