CREATE DATABASE dogmovies_db;
USE dogmovies_db;

CREATE TABLE dogmovies
(
	id int NOT NULL AUTO_INCREMENT,
	movie_title varchar(30) NOT NULL,
	dog_lives BOOLEAN DEFAULT true,
  	PRIMARY KEY(id)
);
