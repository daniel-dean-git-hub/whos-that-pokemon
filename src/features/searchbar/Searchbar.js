import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { correctGuess, selectPokemon } from '../pokemon/pokemonSlice'

const Searchbar = () => {
    const { name } = useSelector(selectPokemon)
    const dispatch = useDispatch()

    const checkGuess = (e) => {
        const userGuess = e.target.value.toLowerCase();

        if ( userGuess === name ) {
            dispatch(correctGuess())
        }
    }

    return (
    <input type="text" onChange={checkGuess}></input>
  )
}

export default Searchbar