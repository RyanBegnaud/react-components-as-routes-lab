import React from 'react';
import { directors } from '../data';

const loadDirectors = () => {
  return directors.map(director => <div><h1>{director.name}</h1><ul>{director.movies}</ul></div>)
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {loadDirectors()}
    </div>
  );
}

export default Directors
