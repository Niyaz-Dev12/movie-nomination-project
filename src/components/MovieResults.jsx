import React from 'react';

function MovieResults({ movie, searchedMovie, handleNomination }) {
  let moviesArr;
  if (movie)
    moviesArr = movie.map((mov) => (
      <li key={mov.imdbID}>
        {`${mov.Title}(${mov.Year})`}
        <button
          type="button"
          value={mov.imdbID}
          onClick={(e) => handleNomination(e, mov.imdbID)}
        >
          Nomination
        </button>
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
