import React from 'react';
// When I search, this should change the state.


const SearchBar = (props) => {
  
  return (
    <div>
      <form autoComplete='off'
      onSubmit = { props.handleSearch } >
        <input placeholder="Search..." id="search" />
        <button><i className="fas fa-search"></i></button>
      </form>
    </div>
  );

}

export default SearchBar;