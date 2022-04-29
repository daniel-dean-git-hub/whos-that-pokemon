import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { correctGuess, selectPokemon } from '../pokemon/pokemonSlice'

const Searchbar = () => {
    const [userGuess, setUserGuess] = useState('')
    const { name } = useSelector(selectPokemon)
    const dispatch = useDispatch()

    const checkGuess = (e) => {
        setUserGuess(() => e.target.value.toLowerCase())
    }

    useEffect(() => {
        if (userGuess === name) {
            dispatch(correctGuess())
            setUserGuess('')
        }
    }, [userGuess, dispatch, name])

    return (
    <input id="searchbar" type="text" onChange={checkGuess} value={userGuess}></input>
  )
}

export default Searchbar