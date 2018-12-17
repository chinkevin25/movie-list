import React from 'react';


const Details = ({movie, handleWatched}) => {

  return (
    <div className='description'>
      <div>Year: {movie.release_date}</div>
      <div>IMDB Rating {movie.vote_average}</div>
      <div>Description {movie.overview}</div>
      <button className="watch" data-movie={movie.title} onClick = {event => handleWatched(event)} >{movie.watched ? 'Watched' : 'To Watch'}</button>
    </div>
  );
}

export default Details;