DROP DATABASE movies;
CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  movie_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  overview VARCHAR(500),
  release_date VARCHAR(12),
  vote_average FLOAT(3,2),
  watched TINYINT(1)
);