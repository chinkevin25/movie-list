import React from 'react';
import MovieEntry from './movie-entry';
import _ from 'lodash';

// this should be the functional stateless class that will render

const MovieList = ({movies, handleWatched, handleDisplay}) => {

  const moviesArr = _.map(movies, (movie, index) => {
    return <MovieEntry movie = {movie} key={index} handleWatched = {handleWatched} />
  });

  return (
    <div className='movie-container' onClick ={handleDisplay}>
      {moviesArr.length !== 0 ? moviesArr : 'NO MATCH FOUND'}
    </div>
  );
}

export default MovieList;