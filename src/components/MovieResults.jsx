import React, { useContext } from 'react';
import { UserStore, ACTIONS } from '../store/userStore';

function MovieResults({ movie }) {
  const { state, dispatch } = useContext(UserStore);

  const handleNomination = (e, id) => {
    if (
      state.nominated.filter((nom) => nom[0].key === e.target.value).length > 0
    ) {
      dispatch({ type: ACTIONS.REMOVE_NOMINATION, payload: e.target.value });
      // const data = [...nominated];
      // const nominatedList = data.filter((mov) => mov[0].key !== e.target.value);
      // setNominated([...nominatedList]);
    } else {
      dispatch({
        type: ACTIONS.ADD_NOMINATION,
        payload: { movieData: movie, id },
      });
    }
  };

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
      <h1>Movie Results {state.searchedMovie && `"${state.searchedMovie}"`}</h1>
      <ul>{moviesArr}</ul>
    </div>
  );
}

export default MovieResults;
