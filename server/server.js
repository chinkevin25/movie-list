const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const app = express();


app.use(express.static('dist'));
app.use(morgan('tiny'));


app.listen(3000, () =>{
  console.log("Listening on Port 3000");
});