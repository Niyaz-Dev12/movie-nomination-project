import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieResults from './MovieResults';
import Nominations from './Nominations';
import useFetch from '../custom_hooks/useFetch';

function App() {
  const [Movie, setMovie] = useState('');

  const [movieData] = useFetch(Movie);

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar movie={Movie} setMovie={setMovie} />
      <MovieResults movie={movieData} searchedMovie={Movie} />
      <Nominations />
    </div>
  );
}
export default App;
