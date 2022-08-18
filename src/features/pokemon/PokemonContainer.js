import React, { useEffect } from 'react'
import './Pokemon.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon, selectPokemon, selectLoading, selectVisibility, imageLoaded } from './pokemonSlice'
import pokeball from '../../assets/images/pokeball.png'

/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

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
        <div css={{
            display: 'flex',
            background: '#ceebe6',
            border: '2rem solid hsl(188, 53%, 49%)', //
            margin: 'auto',
            maxWidth: 1200,
            padding: '3rem',
            borderRadius: '50%',
          }}>
            {/* <div className="pokemon-container"> */}
                { loading && <img className='pokemon loading' draggable={false} src={pokeball} alt='loading' /> } 
                { Object.keys(pokemon).length !== 0 && <Pokemon styleClasses={styleClasses} pokemonDetails={pokemon} changeLoadState={loaded}/>}
            {/* </div> */}
          </div>
    )
}

export default PokemonContainer