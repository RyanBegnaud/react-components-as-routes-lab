import React from 'react';
import { movies } from '../data';

const loadMovies = () => {
  return movies.map(movie => <div><h1>{movie.title}</h1><h2>{movie.time}</h2><ul>{movie.genres}</ul></div>)
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {loadMovies()}
    </div>
  );
};

export default Movies;
