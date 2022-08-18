import React, { useEffect, useRef } from 'react'
/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

import { useDispatch, useSelector } from 'react-redux'
import { correctGuess, selectPokemon, updateGuess, selectUserGuess } from '../pokemon/pokemonSlice'

const Searchbar = () => {
    const dispatch = useDispatch()   
    const userGuess = useSelector (selectUserGuess)
    const { name } = useSelector(selectPokemon)

    const checkGuess = (e) => dispatch(updateGuess(e.target.value))

    const focusSearch = useRef();
    useEffect(() => {
        if (focusSearch.current) focusSearch.current.focus(); 
        if (userGuess === undefined || name === undefined) { return }
        if (userGuess.toLowerCase() === name.toLowerCase()) {
            dispatch(correctGuess())
        }
    }, [userGuess, dispatch, name])


    return (
    <input 
        ref={focusSearch}
        id="searchbar" 
        type="text" 
        onChange={checkGuess} 
        value={userGuess}
        css={{
            borderRadius: `1rem`,
            textAlign: 'center',
            width: '60vw',
            fontSize: '2rem',
            padding: '0px 50px'
        }}
        placeholder={'Type guess here...'}
    />
  )
}

export default Searchbar