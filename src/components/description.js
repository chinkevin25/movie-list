import React from 'react';


const Details = ({movie, handleWatched}) => {

  return (
    <div className='description'>
      <div>Year</div>
      <div>Run Time</div>
      <div>Metascore</div>
      <div>imbd Rating</div>
      <button className="watch" data-movie={movie.title} onClick = {event => handleWatched(event)} >{movie.watched ? 'Watched' : 'To Watch'}</button>
    </div>
  )
}

export default Details;