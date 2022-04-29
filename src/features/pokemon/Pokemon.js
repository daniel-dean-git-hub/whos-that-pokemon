import React, { useEffect } from 'react'
import './Pokemon.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon, selectPokemon, selectLoading, selectVisibility } from './pokemonSlice'
import pokeball from '../../assets/images/pokeball.png'

const Pokemon = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPokemon())
    }, [dispatch])

    const pokemon = useSelector(selectPokemon)
    const loading = useSelector(selectLoading)
    const visibility = useSelector(selectVisibility)

    return (
        <div className="pokemon-container">
            { loading ? <img className='loading' src={pokeball} alt='loading' />
                    : <img 
                        className={visibility ? '' : 'hidden'} 
                        src={pokemon.sprites.other['official-artwork'].front_default} 
                        alt={pokemon.name}
                    /> 
            }
            
        </div>
    )
}

export default Pokemon