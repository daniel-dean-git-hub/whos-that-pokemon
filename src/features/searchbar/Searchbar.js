import React, { useEffect, useRef } from 'react'
import './Searchbar.scss'

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
        placeholder={'Type guess here...'}
    />
  )
}

export default Searchbar
