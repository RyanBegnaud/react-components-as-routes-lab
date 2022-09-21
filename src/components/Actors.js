import React from 'react';
import { actors } from '../data';

const loadActors = () => {
  return actors.map(actor => <div><h1>{actor.name}</h1><ul>{actor.movies}</ul></div>)
}


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {loadActors()}
    </div>
  );
};

export default Actors;
