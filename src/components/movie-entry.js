import React from 'react';

const MovieEntry = ({movie}) => {

  return (
  <div className='movie-entry'>
    <div className='movie-title'>
      {movie.title}
    </div>
  </div>
  )
}

  


export default MovieEntry;




