import React from 'react';

function MovieResults({ movie, searchedMovie }) {
  let moviesArr;
  if (movie)
    moviesArr = movie.map((mov) => (
      <li key={mov.imdbID}>
        {`${mov.Title}(${mov.Year})`} <button type="button">Nomination</button>
      </li>
    ));

  return (
    <div>
      <h1>Movie Results {searchedMovie && `"${searchedMovie}"`}</h1>
      <ul>{moviesArr}</ul>
    </div>
  );
}

export default MovieResults;
