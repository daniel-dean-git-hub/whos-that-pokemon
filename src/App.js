import React from 'react';
import Nameplate from './features/nameplate/Nameplate';
import PokemonContainer from './features/pokemon/PokemonContainer';
import GameControls from './features/gameControls/GameControls';
import './App.scss';

function App() {
  const toggleDisplay = e => {
    e.target.classList.toggle('hidden')
  }

  return (
    <div className="App">
        <Nameplate />
          <PokemonContainer toggleDisplay={toggleDisplay}/>
        <GameControls />
    </div>
  );
}

export default App;
