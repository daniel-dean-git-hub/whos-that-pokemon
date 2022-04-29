import React, { useEffect } from 'react'
import './Pokemon.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon, selectPokemon, selectLoading, selectVisibility } from './pokemonSlice'

const Pokemon = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPokemon())
    }, [])

    const pokemon = useSelector(selectPokemon)
    const loading = useSelector(selectLoading)
    const visibility = useSelector(selectVisibility)

    return (
        <>
            { loading ? <h1>Loading...</h1>
                    : <img 
                        className={visibility ? '' : 'hidden'} 
                        src={pokemon.sprites.other['official-artwork'].front_default} 
                        alt={pokemon.name}
                    /> 
            }
            
        </>
    )
}

export default Pokemon