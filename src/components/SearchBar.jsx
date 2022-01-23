import React, { useContext } from 'react';
import { UserStore, ACTIONS } from '../store/userStore';

function SearchBar() {
  const { state, dispatch } = useContext(UserStore);

  function handleSearch(e) {
    // setMovie(e.target.value);

    dispatch({ type: ACTIONS.ADD_SEARCHED_MOVIE, payload: e.target.value });
  }

  return (
    <>
      <p>Movie Title</p>
      <form>
        <input
          type="text"
          name="search"
          value={state.searchedMovie}
          onChange={handleSearch}
        />
      </form>
    </>
  );
}

export default SearchBar;
