import React from 'react';

const MovieEntry = ({movie, handleWatched}) => {
  console.log(handleWatched,'### FROM MOVIE ENTRY')
  return (
  <div className='movie-entry'>
    <div className='movie-title'>
      {movie.title}
      <button onClick = {event => handleWatched(event)} >Watched</button>
    </div>
  </div>
  )
}

  


export default MovieEntry;




