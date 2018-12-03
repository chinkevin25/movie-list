import React from 'react';
import MovieList from '../components/movie-list.js';
import data from '../data/fakeData.js'

// App is the component that will render everything else.
// This needs to be a class component as this will need to access state

class App extends React.Component {

  constructor(props) {
    super(props);
    // TODO: initalize state;
  }

  render() {
    return (
      <div>
        <MovieList data = {data} / >
      </div>
    )
  }

}

export default App;