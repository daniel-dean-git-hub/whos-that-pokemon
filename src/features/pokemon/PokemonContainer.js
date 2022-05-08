import React, { useEffect } from 'react'
import './Pokemon.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon, selectPokemon, selectLoading, selectVisibility, imageLoaded } from './pokemonSlice'
import pokeball from '../../assets/images/pokeball.png'

import Pokemon from './Pokemon'

const PokemonContainer = () => {
    const dispatch = useDispatch()    
    const pokemon = useSelector(selectPokemon)
    const loading = useSelector(selectLoading)
    const visibility = useSelector(selectVisibility)
    
    useEffect(() => {
      dispatch(getPokemon())
    }, [dispatch])
    

    const loaded = () => dispatch(imageLoaded())
    const loadingClass = loading ? ' img-loading' : ''
    const pokemonVisibility = visibility ? '' : 'hidden' 
    const styleClasses = `${loadingClass} ${pokemonVisibility}`

    return (
        <div className="pokemon-container">
            { loading && <img height={475} width={475} className='loading' draggable={false} src={pokeball} alt='loading' /> } 
            { Object.keys(pokemon).length !== 0 && <Pokemon styleClasses={styleClasses} pokemonDetails={pokemon} changeLoadState={loaded}/>}
        </div>
    )
}

export default PokemonContainer