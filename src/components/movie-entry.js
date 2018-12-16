import React from 'react';

const MovieEntry = ({movie, handleWatched}) => {
  console.log(movie);
  return (
  <div className='movie-entry'>
    <div className='movie-title'data-movie={movie.title}>
      {movie.title}
      <button className="watch" data-movie={movie.title} onClick = {event => handleWatched(event)} >{movie.watched ? 'Watched' : 'To Watch'}</button>
    </div>
  </div>
  )
}

export default MovieEntry;




