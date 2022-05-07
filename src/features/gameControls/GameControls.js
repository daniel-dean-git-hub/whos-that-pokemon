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
                <p css={textStyle}>Congratulations! Current Score {score}</p> 
            </>
            )
        }
        return <p css={textStyle}>Better luck next time.</p>
    }

    const textStyle = {
        fontSize: '3rem',
    }

    const buttonStyle = {
        fontSize: '3rem',
        padding: `0 2rem`,
        margin: `3rem 0`,
        background: `#ceebe6`,
        border: `1rem solid rgb(58 172 190)`,
        borderRadius: `1rem`,
        boxShadow: '0px 10px 20px 5px #000',
        transform: 'translateY(-5px)',

        '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(0px)',
            cursor: 'pointer',
        }
    }

    return (
        <div>
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