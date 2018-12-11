import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import data from './data/fakeData.js'
// fix this to pass data for props
ReactDOM.render(
  <App movies = {[]} />,
  document.getElementById('app')
);