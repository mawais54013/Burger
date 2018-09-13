DROP DATABASE if EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    bad BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
