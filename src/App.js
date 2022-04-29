import React, { useState, useEffect } from 'react';
import Nameplate from './features/nameplate/Nameplate';
import Pokemon from './features/pokemon/Pokemon';
import GameControls from './features/gameControls/GameControls';
import './App.css';


function App() {
  const toggleDisplay = e => {
    e.target.classList.toggle('hidden')
  }

  return (
    <div className="App">
        <Nameplate />
        <Pokemon toggleDisplay={toggleDisplay}/>
        <GameControls />
    </div>
  );
}

export default App;
