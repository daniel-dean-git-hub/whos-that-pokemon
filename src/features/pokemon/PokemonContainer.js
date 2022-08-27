import React, { useEffect } from 'react'
import './Pokemon.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon, selectPokemon, selectLoading, selectVisibility, imageLoaded } from './pokemonSlice'
import pokeball from '../../assets/images/pokeball.png'
import Pokemon from './Pokemon'

const PokemonContainer = () => {
    const dispatch = useDispatch()    
    const pokemon = useSelector(selectPokemon)
    const pokemonLoading = useSelector(selectLoading)
    const visibility = useSelector(selectVisibility)
    
    useEffect(() => {
      dispatch(getPokemon())
    }, [dispatch])
    
    const loaded = () => dispatch(imageLoaded())
    const isLoading = pokemonLoading ? ' img-loading' : ''
    const pokemonVisibility = visibility ? '' : 'hidden' 

    return (
        <div className='pokemon-container'>
                { pokemonLoading && 
                  <img 
                    height='475'
                    width='475'
                    loading='lazy'
                    className='pokemon loading' 
                    draggable={false} 
                    src={pokeball} 
                    alt='loading'
                  />        
                }    
                { Object.keys(pokemon).length !== 0 && 
                  <Pokemon 
                    isLoading={isLoading} 
                    pokemonVisibility={pokemonVisibility} 
                    pokemonDetails={pokemon} 
                    changeLoadState={loaded}
                  />
                }             
          </div>
    )
}

export default PokemonContainer