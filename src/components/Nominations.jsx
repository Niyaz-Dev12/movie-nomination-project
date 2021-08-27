import React from 'react';

function Nominations({ nominatedMovie }) {
  return (
    <>
      <h1>Nominations</h1>
      <ul>{nominatedMovie}</ul>
    </>
  );
}

export default Nominations;
