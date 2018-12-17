const Sequelize = require('sequelize');
const {PASSWORD} = require('../utils/config.js');

const db = new Sequelize('movies', 'root', PASSWORD, {
  dialect: 'mysql'
});

const Movies = db.define('movies', {
  movie_id: Sequelize.INTEGER,
  title : Sequelize.STRING,
  overview : Sequelize.TEXT,
  release_date : Sequelize.DATE,
  vote_average : Sequelize.FLOAT,
  watched : Sequelize.BOOLEAN
});

//creates the table
Movies.sync();

module.exports.Movies = Movies;