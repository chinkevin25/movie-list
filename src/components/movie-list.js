import React from 'react';
import _ from 'lodash';

// this should be the functional stateless class that will render

const MovieList = (props) => {

  const movies = _.map(props.data.movies, movie => {
    return <div> {movie.title} </div>
  });
  return (
  <div>{movies}</div>
  )
}

export default MovieList;