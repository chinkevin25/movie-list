import React from 'react';

const AddMovie = props => {

  return (
    // need to add an event listener
    <form onSubmit ={props.handleAdd} autoComplete='off'> 
      <input type='text' placeholder="Add movie title here" id='addMovie'/>
      <button>Add</button>
    </form>
  )
}

export default AddMovie;