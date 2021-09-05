import React from 'react';
import { actors } from '../data';
const actorsData = actors.map(person => 
  <div key={person.name}>
    {person.name}
      <ul>
        <li>{person.movies}</li>
      </ul>
  </div>
)

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorsData}

    </div>
  );
};

export default Actors;
