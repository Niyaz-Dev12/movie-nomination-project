import React from 'react';

function SearchBar({ movie, setMovie }) {
  function handleSearch(e) {
    setMovie(e.target.value);
  }

  return (
    <>
      <p>Movie Title</p>
      <form action="">
        <input
          type="text"
          name="search"
          value={movie}
          onChange={handleSearch}
        />
      </form>
    </>
  );
}

export default SearchBar;
