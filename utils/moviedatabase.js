const {TOKEN} = require('../utils/config.js');
const request = require('request');

const findMovieAPI = (term, callback) => {

  const searchTerm = term.replace(/\s/g, '%20');

  options = {
    url: `https://api.themoviedb.org/3/search/movie?api_key=${TOKEN}&query=${searchTerm}`
  }

  request(options, (err, res, body) => {

    if (err) {
      callback(err);
    } else {
      // let's only return one for now. Eventually we will want to have a feature
      // that allows the user to search and add only certain movies from the search to
      // the list.
      callback(null, (JSON.parse(body).results[0]));
    }
  });


}

module.exports.findMovieAPI = findMovieAPI;