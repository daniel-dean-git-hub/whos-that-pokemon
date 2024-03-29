import React from 'react';
import { useSelector } from 'react-redux'
import Nameplate from './features/nameplate/Nameplate';
import PokemonContainer from './features/pokemon/PokemonContainer';
import GameControls from './features/gameControls/GameControls';
import Settings from './features/settings/settings';
import { selectError } from '../src/features/pokemon/pokemonSlice'
import './App.scss';

function App() {
  const toggleDisplay = e => e.target.classList.toggle('hidden')
  const serverStatus = useSelector(selectError)

  return (
    <div className="App">
      {!serverStatus 
        ? <> 
            <Settings />
            <Nameplate />
            <PokemonContainer toggleDisplay={toggleDisplay}/>
            <GameControls />
          </>
        : <>
            <h1>Server Offline</h1>
            <h2>Please Try Again Later</h2>
          </>
      }
    </div>
  );
}

export default App;
