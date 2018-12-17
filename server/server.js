const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const app = express();



app.use(express.static('dist'));
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.post('/addmovie', (req,res) => {
  console.log(req.body);
  res.send(JSON.stringify('Post Request Successfuly Ended'));
})

app.listen(3000, () =>{
  console.log("Listening on Port 3000");
});