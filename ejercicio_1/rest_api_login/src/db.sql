CREATE DATABASE IF NOT EXISTS db_login;
USE db_login;
CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(250) NOT NULL,
	email VARCHAR(250) UNIQUE NOT NULL,
	password VARCHAR(250) UNIQUE NOT NULL
);
SHOW TABLES;
DESCRIBE users;