import React, { useContext } from 'react';
import { UserStore } from '../store/userStore';

function Nominations() {
  const { state } = useContext(UserStore);
  return (
    <>
      <h1>Nominations</h1>
      <ul>{state.nominated}</ul>
    </>
  );
}

export default Nominations;
