import React, { useReducer } from 'react';

export const ACTIONS = {
  ADD_SEARCHED_MOVIE: 'ADD_SEARCHED_MOVIE',
  ADD_NOMINATION: 'ADD_NOMINATION',
  REMOVE_NOMINATION: 'REMOVE_NOMINATION',
};

const initialState = { nominated: [], searchedMovie: '' };

export const UserStore = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_SEARCHED_MOVIE:
      return { ...state, searchedMovie: action.payload };
    case ACTIONS.REMOVE_NOMINATION: {
      const data = [...state.nominated];
      const nominatedList = data.filter((mov) => mov[0].key !== action.payload);

      return {
        ...state,
        nominated: [...nominatedList],
      };
    }
    case ACTIONS.ADD_NOMINATION: {
      if (state.nominated.length < 5) {
        const nominatedList = action.payload.movieData
          .map((mov) => <li key={mov.imdbID}>{`${mov.Title}(${mov.Year})`}</li>)
          .filter((mov) => mov.key === action.payload.id);

        return {
          ...state,
          nominated: [...state.nominated, Array.from(nominatedList)],
        };
      }
      return state;
    }

    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStore.Provider value={{ state, dispatch }}>
      {children}
    </UserStore.Provider>
  );
}
export default UserProvider;
