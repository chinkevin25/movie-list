import React from 'react';
import MovieEntry from './movie-entry';
import _ from 'lodash';

// this should be the functional stateless class that will render

const MovieList = ({movies}) => {

  const moviesArr = _.map(movies, (movie, index) => {
    return <MovieEntry movie = {movie} key={index} />
  });

  return (
    <div className='movie-container'>
      {moviesArr.length !== 0 ? moviesArr : 'NO MATCH FOUND'}
    </div>
  );
}

export default MovieList;