var mysql = require('mysql');

var connection;

connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'NeptunePluto101',
		database: 'dogmovies_db'
	})

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;
