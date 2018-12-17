import React from 'react';

const AddMovie = props => {

  return (
    // need to add an event listener
    <form onSubmit ={props.handleAdd} autoComplete='off' id='search'> 
      <input type='text' placeholder="Add movie title here" id='addMovie'/>
      <button><i className="far fa-plus-square"/></button>
    </form>
  )
}

export default AddMovie;