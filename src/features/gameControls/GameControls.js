import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { giveUp, getPokemon, selectVisibility, selectCorrectState, selectScore } from '../pokemon/pokemonSlice'
import Searchbar from '../searchbar/Searchbar';
/** @jsxImportSource @emotion/react */
const GameControls = () => {
    const dispatch = useDispatch()
    const visibility = useSelector(selectVisibility)
    const guessCorrect = useSelector(selectCorrectState)
    const score = useSelector(selectScore)

    const revealPokemon = () => dispatch(giveUp())
    const newPokemon = () => dispatch(getPokemon())

    const displayMessage = () => {
        if (guessCorrect) { 
            return ( <>
                <p>Congratulations! Current Score {score}</p> 
            </>
            )
        }
        return <p>Better luck next time.</p>
    }

    const buttonStyle = {
        padding: `0 1rem`,
        background: `#ceebe6`,
        border: `0.25rem solid rgb(58 172 190)`,
        borderRadius: `1rem`
    }

    return (
        <div className="controls">
            { !visibility && <Searchbar /> }
            { visibility && displayMessage() }

            <div>
                { 
                    visibility 
                        ? <button css={buttonStyle} onClick={newPokemon} >New Pokemon</button>
                        : <button css={buttonStyle} onClick={revealPokemon} >Give Up?</button>
                }
            </div>
        </div>
    )
}

export default GameControls