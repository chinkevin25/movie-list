import React from 'react';
import MovieList from '../components/movie-list.js';
import SearchBar from './search-bar.js';
import AddMovie from '../components/add-movie';
import _ from 'lodash';

// App is the component that will render everything else.
// This needs to be a class component as this will need to access state

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
  };

  handleSearch(event) {
    event.preventDefault();
    const searchBar = document.getElementById('search');
    const searchTerm = searchBar.value;
    const searchResult = _(this.state.movies).filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())).value();
    this.setState({ filteredMovies: searchResult }, () => {
      searchBar.value = '';
    });
  };

  handleAdd(event) {
    event.preventDefault();
    const addMovie = document.getElementById('addMovie');
    const newMovie = addMovie.value;
    const movieList = this.state.movies;
    movieList.push({
      title: newMovie,
      watched: false
    });
    this.setState({ movies: movieList, filteredMovies: movieList }, () => {
      addMovie.value = '';
    });
  };

  handleWatched(event) {
    const currentState = this.state;
    const movieTitle = event.target.dataset.movie;

    _.each(currentState.movies, movie => {
      if (movie.title === movieTitle) {
        movie.watched = !movie.watched;
      }

    });
    this.setState({ movies: currentState.movies });
  };

  handleWatchedTab(event) {
    const filteredMovies = _(this.state.movies).filter(movie => movie.watched === true).value();
    this.setState({
      filteredMovies: filteredMovies
    });

  };

  handleToWatchTab(event) {
    const filteredMovies = _(this.state.movies).filter(movie => movie.watched === false).value();
    this.setState({
      filteredMovies: filteredMovies
    });
  } 

  render() {
    return (
      <div>
        <h1> MOVIE LIST </h1>
        <AddMovie handleAdd={this.handleAdd} />
        <SearchBar
          handleSearch={this.handleSearch}
          movieList={this.state.movies} />
        <button onClick={e => this.handleWatchedTab(e)}>Watched</button>
        <button onClick={e => this.handleToWatchTab(e)}>To Watch</button>
        <MovieList movies={this.state.filteredMovies} handleWatched={this.handleWatched} />
      </div>
    )
  }


}

export default App;