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
      movies : []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search').value;
    const searchResult = _(this.props.movies).filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())).value();
    this.setState({movies : searchResult});
  }

  handleAdd(event) {
    event.preventDefault();
    const newMovie = document.getElementById('addMovie').value;
    console.log(this.props,'PROPS')
    this.props.movies.push({title:newMovie});
    // const movieList = this.props.movies.push({title: newMovie});
    this.setState({movies : this.props.movies});

  }

  render() {
    return (
      <div>
        <h1> MOVIE LIST </h1>
        <AddMovie handleAdd = {this.handleAdd}/>
        <SearchBar
         handleSearch = {this.handleSearch}
         movieList = {this.props.movies} />
        <MovieList movies = {this.state.movies} / >
      </div>
    )
  }


}

export default App;