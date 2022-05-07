import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { giveUp, getPokemon, selectVisibility } from '../pokemon/pokemonSlice'
import Searchbar from '../searchbar/Searchbar';

const GameControls = () => {
    const dispatch = useDispatch()
    const visibility = useSelector(selectVisibility)

    const revealPokemon = () => dispatch(giveUp())
    const newPokemon = () => dispatch(getPokemon())

    

    return (
        <div className="controls">
            <Searchbar />
            <div>
                { 
                    visibility 
                        ? <button onClick={newPokemon} >New Pokemon</button>
                        : <button onClick={revealPokemon} >Give Up?</button>
                }
            </div>
        </div>
    )
}

export default GameControls