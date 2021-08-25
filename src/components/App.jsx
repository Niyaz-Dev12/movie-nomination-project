import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieResults from './MovieResults';
import Nominations from './Nominations';

function App() {
  const [Movie, setMovie] = useState();

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar movie={Movie} setMovie={setMovie} />
      <MovieResults movie={Movie} />
      <Nominations />
    </div>
  );
}
export default App;
