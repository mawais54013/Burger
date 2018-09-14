-- made this database 
DROP DATABASE if EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;
-- create a table to hold the values 
-- the put is there because I wasd trying to get the new game input to a specific spot on the DOM but it was not working 
-- it was including the new entry into multiple places 
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    bad BOOLEAN DEFAULT false,
    put BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
