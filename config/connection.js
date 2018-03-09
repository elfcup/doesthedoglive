var mysql = require('mysql');

// var connection;

// var connection = mysql.createConnection({
// 	// connectionLimit: 10,	
// 	port: 3306,
// 	host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// 	user: 'oobcc714e2gxy2xm',
// 	password: 'uh5g8z3z765o4qju',
// 	database: 'dogmovies_db'
// 	});

var connection = mysql.createConnection({
	// connectionLimit: 10,	
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'NeptunePluto101',
	database: 'dogmovies_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;
