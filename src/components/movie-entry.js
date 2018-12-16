import React from 'react';
import Description from './description.js';
const MovieEntry = ({movie, handleWatched, handleDisplay}) => {
  return (
  <div className ='movie-entry'>
    <div className='movie-title'data-movie={movie.title} onClick ={handleDisplay}>
      {movie.title}
      
    </div>
    {movie.display ? <Description handleWatched ={handleWatched} movie ={movie}/> : null}
  </div>
  )
}

export default MovieEntry;




