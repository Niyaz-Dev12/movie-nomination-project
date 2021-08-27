import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieResults from './MovieResults';
import Nominations from './Nominations';
import useFetch from '../custom_hooks/useFetch';

function App() {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [movieData] = useFetch(searchedMovie);

  const [nominated, setNominated] = useState([]);
  // const [toggleNomination, setToggleNomination] = useState(true);

  const handleNomination = (e, id) => {
    // setToggleNomination((prev) => !prev);
    if (nominated.filter((nom) => nom[0].key === e.target.value).length > 0) {
      const data = [...nominated];
      const nominatedList = data.filter((mov) => mov[0].key !== e.target.value);
      setNominated([...nominatedList]);
    } else {
      const nominatedList = movieData
        .map((mov) => <li key={mov.imdbID}>{`${mov.Title}(${mov.Year})`}</li>)
        .filter((mov) => mov.key === id);
      setNominated([...nominated, Array.from(nominatedList)]);
    }
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar movie={searchedMovie} setMovie={setSearchedMovie} />
      <MovieResults
        movie={movieData}
        searchedMovie={searchedMovie}
        handleNomination={handleNomination}
      />
      <Nominations nominatedMovie={nominated} />
    </div>
  );
}
export default App;
