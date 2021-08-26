import { useState, useEffect } from 'react';
import Axios from 'axios';

function useFetch(movie) {
  const [movieData, setMovieData] = useState();

  const API_ENDPOINT = `http://www.omdbapi.com/?s=${movie}&apikey=d9d4993f`;

  useEffect(() => {
    Axios.get(API_ENDPOINT).then((res) => {
      if (res !== undefined) setMovieData(res.data.Search);
    });
  }, [movie]);

  return [movieData];
}

export default useFetch;
