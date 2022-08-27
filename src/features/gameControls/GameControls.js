import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { giveUp, getPokemon, selectId, selectVisibility, selectCorrectState, selectScore } from '../pokemon/pokemonSlice'
import { selectEnabledGens } from '../settings/settingsSlice'
import Searchbar from '../searchbar/Searchbar';
import './GameControls.scss'

const GameControls = () => {
    const dispatch = useDispatch()
    const visibility = useSelector(selectVisibility)
    const guessCorrect = useSelector(selectCorrectState)
    const score = useSelector(selectScore)
    const selectedGens = useSelector(selectEnabledGens)
    const currentId = useSelector(selectId)
    const revealPokemon = () => dispatch(giveUp())
    const newPokemon = () => dispatch(getPokemon({id: currentId, genList: selectedGens}))

    const displayMessage = () => {
        return <p>{
            guessCorrect ? `Congratulations! Current Score ${score}` : `Better luck next time.`
        }</p>
    }

    const focusButton = useRef();
    useEffect(() => {
        if (focusButton.current) focusButton.current.focus(); 
    });

    return (
        <>
            <div className="controls-container">
                { visibility ? displayMessage() : <Searchbar /> }
            </div>            
            { visibility 
                ? <button ref={focusButton} className="controls" onClick={newPokemon} >New Pokemon</button>
                : <button className="controls" onClick={revealPokemon} >Give Up?</button>
            }
        </>
    )
}

export default GameControls