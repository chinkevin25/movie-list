const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const {findMovieAPI} = require('../utils/moviedatabase.js');
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
      console.log(result);
    }
  });

  res.send(JSON.stringify('Post Request Successfuly Ended'));
})

app.listen(3000, () =>{
  console.log("Listening on Port 3000");
});