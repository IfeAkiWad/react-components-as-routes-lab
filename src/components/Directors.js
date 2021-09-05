import React from 'react';
import { directors } from '../data';

const directorData = directors.map( dir =>
  <div key={dir.name}>
    {dir.name}
      <ul>
        <li>{dir.movies}</li>
      </ul>
  </div>
)

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directorData}
    </div>
  );
}

export default Directors
