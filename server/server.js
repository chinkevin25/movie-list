const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const {findMovieAPI} = require('../utils/moviedatabase.js');
const db = require('../database/index.js');
const app = express();




app.use(express.static('dist'));
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.post('/addmovie', (req,res) => {
  const term = req.body.term;
  findMovieAPI(term, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // this should be refactored into a the database file.
      db.Movies.findOrCreate({where: {movie_id: result.id}, defaults: {
        title : result.title,
        overview : result.overview,
        release_date : result.release_date,
        vote_average : result.vote_average,
        watched : 0
      }}).then(() =>{
        res.send(JSON.stringify('Post Request Successfuly Ended'));
      })
    }
  });
});

app.get('/getmovies', (req, res) => {

  db.Movies.findAll().then(result =>{
    res.send(JSON.stringify(result));
  });
})

app.listen(3000, () =>{
  console.log("Listening on Port 3000");
});