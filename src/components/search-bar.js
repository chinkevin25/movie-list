import React from 'react';
// When I search, this should change the state.


const SearchBar = (props) => {
  
  return (
    <div>
      <form
      onSubmit = { event => {
        event.preventDefault();
        props.handleSearch(props.movieList)
        } } >
        <input placeholder="Search..." id="search" />
        <button><i class="fas fa-search"></i></button>
      </form>
    </div>
  );

}

export default SearchBar;