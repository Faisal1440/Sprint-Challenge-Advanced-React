import React from 'react';

function Player({ key, name, country, searches }) { //KEYS FROM DATA
  return (
    <div className="player" data-testid={key}>
      <h3>{name}</h3>
      <p>{country}</p>
      <p>{searches}</p>
    </div>
  );
}

export default Player;