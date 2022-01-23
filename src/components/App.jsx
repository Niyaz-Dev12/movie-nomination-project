import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import MovieResults from './MovieResults';
import Nominations from './Nominations';
import useFetch from '../custom_hooks/useFetch';
import { UserStore } from '../store/userStore';

function App() {
  // const [searchedMovie, setSearchedMovie] = useState('');
  const { state } = useContext(UserStore);
  const [movieData] = useFetch(state.searchedMovie);
  // const [nominated, setNominated] = useState([]);

  // const handleNomination = (e, id) => {
  //   dispatch({ type: ACTIONS.HANDLE_NOMINATION, payload: [e, id, movieData] });
  //   //   if (nominated.filter((nom) => nom[0].key === e.target.value).length > 0) {
  //   //     const data = [...nominated];
  //   //     const nominatedList = data.filter((mov) => mov[0].key !== e.target.value);
  //   //     setNominated([...nominatedList]);
  //   //   } else {
  //   //     const nominatedList = movieData
  //   //       .map((mov) => <li key={mov.imdbID}>{`${mov.Title}(${mov.Year})`}</li>)
  //   //       .filter((mov) => mov.key === id);
  //   //     setNominated([...nominated, Array.from(nominatedList)]);
  //   //   }
  //   // };
  // };
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar />
      <MovieResults movie={movieData} />
      <Nominations />
    </div>
  );
}

export default App;
