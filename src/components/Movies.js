import React from 'react';
import { movies } from '../data';

const moviesData = movies.map(movie =>
  <div key={movie.title}>
      <h3>{movie.title}</h3>
    <label>Time: </label>
      {movie.time}
    <br />
    <br />
     <label>Genres: </label>
        {movie.genres.map(genre => <ul><li>{genre}</li></ul>)}
  <br />
  </div>

)

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
          {moviesData}
    </div>
  );
};

export default Movies;
