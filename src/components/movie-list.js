import React from 'react';
import MovieEntry from './movie-entry';
import _ from 'lodash';


const MovieList = ({movies, handleWatched, handleDisplay}) => {

  const moviesArr = _.map(movies, (movie, index) => {
    return <MovieEntry movie = {movie} key={index} handleWatched = {handleWatched} handleDisplay={handleDisplay}/>
  });

  return (
    <div className='movie-container'>
      {moviesArr.length !== 0 ? moviesArr : 'NO MATCH FOUND'}
    </div>
  );
}

export default MovieList;