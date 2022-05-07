import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { correctGuess, selectPokemon, updateGuess, selectUserGuess } from '../pokemon/pokemonSlice'

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Searchbar = () => {
    const dispatch = useDispatch()   
    const userGuess = useSelector (selectUserGuess)
    const { name } = useSelector(selectPokemon)

    const checkGuess = (e) => dispatch(updateGuess(e.target.value))

    useEffect(() => {
        if (userGuess === name) {
            dispatch(correctGuess())
        }
    }, [userGuess, dispatch, name])

    return (
    <input 
        id="searchbar" 
        type="text" 
        onChange={checkGuess} 
        value={userGuess}
        css={{
            borderRadius: `1rem`,
            textAlign: 'center',
            width: '60vw',
            fontSize: '.5rem',
            padding: '0px 50px'
        }}
    />
  )
}

export default Searchbar