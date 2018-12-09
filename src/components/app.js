import React from 'react';
import MovieList from '../components/movie-list.js';
import SearchBar from './search-bar.js';
import _ from 'lodash';

// App is the component that will render everything else.
// This needs to be a class component as this will need to access state

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies : props.movies
    };
  }

  // How do I make a helper function but still be able to call this.setState? By not using a fat arrow,
  // I can't carry the lexical this... Do I need to bind the this.setState function somewhere?

  render() {
    return (
      <div>
        <h1> MOVIE LIST </h1>
        <SearchBar
         handleSearch = {movies => {
           const searchTerm = document.getElementById('search').value;
           const searchResult = _(movies).filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())).value();
           this.setState({
             movies: searchResult
           });
         }}
         movieList = {this.props.movies} />
        <MovieList movies = {this.state.movies} / >
      </div>
    )
  }


}

export default App;