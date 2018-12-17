import React from 'react';
import MovieList from '../components/movie-list.js';
import SearchBar from './search-bar.js';
import AddMovie from '../components/add-movie';
import _ from 'lodash';

// App is the component that will render everything else.
// This needs to be a class component as this will need to access state

// Technically App doesn't need to be stateful right? App doesn't care what data is in the Movie List. Therefore we could, in theory just use 
// Movie List as the stateful component. This would let us access this.setState inside MovieList and only need to pass props one level down
// Instead of two levels.

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: []
    };

    // there is a babel preset that lets me use fat arrow in the body.
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
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


  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    fetch('/getmovies')
      .then(result => result.json())
      .then(data => {
        this.setState({
          movies: data,
          filteredMovies: data
        }, () => {
          document.getElementById('addMovie').value = '';
        });
      });
  }


  postMovie(body, callback) {
    fetch('/addmovie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }).then(result => {
      this.getMovies();
    });
  }


  handleAdd(event) {
    event.preventDefault();
    // should grab the term from state but for now I'll do the anti-pattern. Refactor later!
    const addMovie = document.getElementById('addMovie');
    const newMovie = addMovie.value;

    const payload = { term: newMovie };
    this.postMovie(JSON.stringify(payload));

  }

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

  handleDisplay(event) {
    console.log('Inside Handle Display');
    const selectedMovie = event.target.dataset.movie;
    const currentMovieList = this.state.movies;
    _(currentMovieList).each(movie => {
      if (movie.title === selectedMovie) {
        movie.display = !movie.display;
      }
    });

    this.setState({
      movies: currentMovieList
    });
  }

  render() {
    return (
      <div>
        <h1> MOVIE LIST </h1>
        <AddMovie handleAdd={this.handleAdd} />
        <SearchBar
          handleSearch={this.handleSearch}
          movieList={this.state.movies}
        />
        <button onClick={e => this.handleWatchedTab(e)}>Watched</button>
        <button onClick={e => this.handleToWatchTab(e)}>To Watch</button>
        <MovieList movies={this.state.filteredMovies} handleWatched={this.handleWatched} handleDisplay={this.handleDisplay} />
      </div>
    )
  }


}

export default App;