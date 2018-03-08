var mysql = require('mysql');

var connection;

connection = mysql.createPool({
	connectionLimit: 10,	
	// port: 3306,
	host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'da0kbir6uftng6tn',
	password: 'dm8lemkutbrzhia0',
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
