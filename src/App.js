import React from 'react';
import Nameplate from './features/nameplate/Nameplate';
import PokemonContainer from './features/pokemon/PokemonContainer';
import GameControls from './features/gameControls/GameControls';
import './App.scss';

/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

function App() {
  const toggleDisplay = e => {
    e.target.classList.toggle('hidden')
  }

  return (
    <div className="App">
        <Nameplate />
        <div css={{
          background: '#ceebe6',
          border: '2vw solid rgb(58 172 190)',
          margin: 'auto',
          maxWidth: 1200,
          padding: '1rem',
          borderRadius: '5rem',
          // boxShadow: '0px 0px 25px 25px rgb(58 172 190), inset 0px 0px 25px 25px rgb(58 172 190)',
        }}>
          <PokemonContainer toggleDisplay={toggleDisplay}/>
        </div>

        
        <GameControls />
    </div>
  );
}

export default App;
